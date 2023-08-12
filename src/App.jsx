import React from "react";
import "./App.scss";
import Sidebar from "./Sidebar";
import Content from "./Content";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
