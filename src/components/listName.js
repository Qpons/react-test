import React, { Component } from "react";
import "./style.css";

const ListName = () => {
  return (
    <div className="listName">
      <input type="text" placeholder="Enter List Name" />
      <br />
      <button>Add List</button>
    </div>
  );
};

export default ListName;
