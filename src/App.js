import React, { Component } from "react";
import ListNames from "./components/listNames";
import ListItems from "./components/listItems";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topleft">Qpon's Todo List</div>
      <div className="nav">
        Current Selected List
        <br />
        (0/0) Completed
      </div>
      <div className="sidePanel">
        <ListNames />
      </div>
      <div className="listButton">
        <ListItems />
      </div>
    </div>
  );
}

export default App;
