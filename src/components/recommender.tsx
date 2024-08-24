import React from "react";
import Cards from "./cards";

const Recommender: React.FC = () => {
  return (
    <>
      <div className="chat-box flex h-full grow flex-col overflow-y-scroll rounded-lg p-2 dark:bg-zinc-700">
        <Cards
          url="https://www.example.com"
          img="https://picsum.photos/200/300"
          title="Minim quis ut culpa Lorem ea ex sunt exercitation sunt duis aliquip officia et in.x"
        />
      </div>
    </>
  );
};
export default Recommender;
