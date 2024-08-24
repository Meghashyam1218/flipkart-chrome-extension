import React from "react";
import Content from "./components/content";
import Sidebar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";
import Recommender from "./components/recommender";

const App: React.FC = () => {
  return (
    <div className="flex w-min bg-zinc-600">
      <div className="container flex h-[470px] min-w-[375px] flex-col overflow-x-hidden bg-zinc-200 p-1 dark:bg-zinc-600">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/recommender" element={<Recommender />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  );
};
export default App;
