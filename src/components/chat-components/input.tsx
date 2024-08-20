import React from "react";
interface InputProps {
  input: string;
  suggestions: string[];
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddQuestion: () => void;
}
const Input: React.FC<InputProps> = ({
  input,
  suggestions,
  onInputChange,
  onAddQuestion,
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAddQuestion();
    }
  };

  return (
    <div className="sticky bottom-0 mt-1 flex items-center rounded-lg">
      <input
        list="suggestions"
        placeholder="Type your Question here"
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyUp={handleKeyPress}
        className="input-field h-9 w-full rounded-lg bg-zinc-800 px-10 text-white focus:bg-neutral-900 focus:outline-none"
      ></input>
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
      <button
        type="submit"
        onClick={onAddQuestion}
        className="group absolute right-0 m-2 rounded-lg p-1"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-transparent text-zinc-300 transition-all group-hover:rotate-45"
        >
          <path
            d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M11.5 12.5L15 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Input;
