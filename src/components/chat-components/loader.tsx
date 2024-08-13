import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader mb-4 max-w-[70%] items-start self-start">
      <div className="flex gap-1 rounded-xl rounded-bl-none bg-zinc-900 p-3 text-zinc-200">
        <div
          style={{ animationDelay: "0s" }}
          className="generating-dot h-2 w-2 animate-bounce rounded-full bg-zinc-200"
        ></div>
        <div
          style={{ animationDelay: "0.2s" }}
          className="generating-dot h-2 w-2 animate-bounce rounded-full bg-zinc-200"
        ></div>
        <div
          style={{ animationDelay: "0.4s" }}
          className="generating-dot h-2 w-2 animate-bounce rounded-full bg-zinc-200"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
