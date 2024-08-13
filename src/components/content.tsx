import React, { useCallback, useEffect, useRef, useState } from "react";
import Chat from "./chat";
import Input from "./input";
interface QA {
  question: string;
  answer: string;
}
const Content: React.FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [qaList, setQAList] = useState<QA[]>([]);
  const [suggestions, setSuggestions] = useState([]);
  const latestQuestionRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    debouncedHandleInputChange(event.target.value);
  };
  // Define the function to be executed after debounce
  const processInput = async (value: string) => {
    console.log("Processed value:", value);
    // Put your logic here to handle the input value
    if (value.trim()) {
      try {
        const response = await fetch(
          "https://cbdd-34-83-247-89.ngrok-free.app/suggest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              text: value,
            }),
          },
        );
        const data = await response.json();
        console.log(data);
        const suggestionsFromApi = data.suggestions || [];

        // Format suggestions with user input
        const updatedSuggestions = suggestionsFromApi.map(
          (suggestion: string) => `${value} ${suggestion}`,
        );

        setSuggestions(updatedSuggestions);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const debounce = (func: Function, wait: number) => {
    let timeout: number | undefined;
    return (...args: any[]) => {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
      timeout = window.setTimeout(() => func(...args), wait);
    };
  };

  // Create the debounced version of your function
  const debouncedHandleInputChange = useCallback(
    debounce(processInput, 500), // Adjust the delay as needed
    [],
  );
  const handleAddQuestion = async () => {
    if (input.trim()) {
      setLoading(true);
      let [tab] = await chrome.tabs.query({ active: true });
      console.log(tab.url);
      // Add the question to the state immediately
      const newQuestion = input;
      setQAList([...qaList, { question: newQuestion, answer: "" }]);
      setInput(""); // Clear the input field
      setSuggestions([]);

      try {
        // Simulate an API call to get the answer
        const response = await fetch(
          "https://1915-117-250-66-185.ngrok-free.app/ans",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              question: newQuestion,
              url: tab.url,
            }),
          },
        );

        if (response.status == 200) {
          const data = await response.json();
          console.log(data);
          const newAnswer = data.answer; // Assuming the response contains an 'answer' field
          // const newAnswer = "Ex enim excepteur culpa ipsum excepteur.";
          // Update the state with the answer
          // setTimeout(() => {
          if (newAnswer == "") {
            setQAList((prevQAList) =>
              prevQAList.map((qa, index) =>
                index === prevQAList.length - 1
                  ? { ...qa, answer: "Nothing ..." }
                  : qa,
              ),
            );
            // chrome.runtime.sendMessage({ type: "saveState", state: qaList });
          } else {
            setQAList((prevQAList) =>
              prevQAList.map((qa, index) =>
                index === prevQAList.length - 1
                  ? { ...qa, answer: newAnswer }
                  : qa,
              ),
            );
            // chrome.runtime.sendMessage({ type: "saveState", state: qaList });
          }
        } else {
          const newAnswer = "Something went wrong"; // Assuming the response contains an 'answer' field
          // const newAnswer = "Ex enim excepteur culpa ipsum excepteur.";
          // Update the state with the answer
          // setTimeout(() => {
          setQAList((prevQAList) =>
            prevQAList.map((qa, index) =>
              index === prevQAList.length - 1
                ? { ...qa, answer: newAnswer }
                : qa,
            ),
          );
          // chrome.runtime.sendMessage({ type: "saveState", state: qaList });
        }
        setLoading(false);
        // }, 2000);
      } catch (error) {
        console.error("Failed to fetch the answer:", error);
        setQAList((prevQAList) =>
          prevQAList.map((qa, index) =>
            index === prevQAList.length - 1
              ? { ...qa, answer: "Something went wrong" }
              : qa,
          ),
        );
        // chrome.runtime.sendMessage({ type: "saveState", state: qaList });

        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (latestQuestionRef.current) {
      latestQuestionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [qaList]);
  return (
    <>
      <Chat
        latestQuestionRef={latestQuestionRef}
        qaList={qaList}
        loading={loading}
      />
      <Input
        input={input}
        suggestions={suggestions}
        onInputChange={handleInputChange}
        onAddQuestion={handleAddQuestion}
      />
    </>
  );
};

export default Content;
