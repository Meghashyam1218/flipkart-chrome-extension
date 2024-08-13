import React from "react";
import Content from "./components/content";

const App: React.FC = () => {
  return (
    <div className="container flex h-[470px] min-w-[375px] max-w-screen-xs flex-col overflow-x-hidden bg-zinc-200 p-1 dark:bg-zinc-600">
      <Content />
    </div>
  );
};
export default App;
