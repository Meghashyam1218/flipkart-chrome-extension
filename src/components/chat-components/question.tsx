import React from "react";

// Define the type for the props
interface QuestionProps {
  text: string;
}

const Question: React.FC<QuestionProps> = ({ text }) => {
  return (
    <div className="question mb-4 max-w-[70%] items-end self-end">
      <p className="inline-block hyphens-auto break-all rounded-xl rounded-br-none bg-zinc-900 p-1 px-2 text-zinc-200">
        {text}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="ml-1 inline-block fill-zinc-800"
      >
        <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
      </svg>
    </div>
  );
};

export default Question;
