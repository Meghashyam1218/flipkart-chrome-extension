import React from "react";
import Question from "./chat-components/question";
import Answer from "./chat-components/answer";
import Loader from "./chat-components/loader";

interface ChatProps {
  qaList: { question: string; answer: string }[];
  loading: boolean;
  latestQuestionRef: React.RefObject<HTMLDivElement>;
}

const Chat: React.FC<ChatProps> = ({ qaList, latestQuestionRef }) => {
  return (
    <div className="chat-box flex max-h-[450px] grow flex-col overflow-y-scroll rounded-lg p-2 dark:bg-zinc-700">
      {qaList.map((qa, index) => (
        <div
          key={index}
          ref={index === qaList.length - 1 ? latestQuestionRef : null}
          className="flex flex-col"
        >
          <Question text={qa.question} />
          {qa.answer === "" ? <Loader /> : <Answer text={qa.answer} />}
        </div>
      ))}
      {qaList.length === 0 ? (
        <p className="grid grow items-center justify-items-center text-xl text-zinc-500">
          Ask a Question to get started
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chat;
