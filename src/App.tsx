import React from "react";
import Content from "./components/content";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <div className="flex w-min bg-zinc-600">
      <div className="container flex h-[470px] w-min min-w-[375px] max-w-screen-xs flex-col overflow-x-hidden bg-zinc-200 p-1 dark:bg-zinc-600">
        <Content />
      </div>
      <Sidebar />
    </div>
  );
};
export default App;
