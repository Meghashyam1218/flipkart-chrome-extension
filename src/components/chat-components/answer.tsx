import React from "react";

// Define the type for the props
interface AnswerProps {
  text: string;
}

const Answer: React.FC<AnswerProps> = ({ text }) => {
  return (
    <div className="answer mb-4 max-w-[70%] items-start self-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="mr-1 inline-block fill-zinc-800"
      >
        <path d="M3 11v8h.051c.245 1.692 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9s-9 4.038-9 9zm6 1c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6-4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
      </svg>
      <p className="inline-block hyphens-auto break-all rounded-xl rounded-bl-none bg-zinc-900 p-1 px-2 text-zinc-200">
        {text}
      </p>
    </div>
  );
};

export default Answer;
