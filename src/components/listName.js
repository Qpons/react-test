import React, { Component } from "react";
import "./style.css";

class ListName extends Component {
  state = {};
  render() {
    return (
      <div className="listName">
        <input type="text" value="Enter List Name" />
        <br />
        <button>Add List</button>
      </div>
    );
  }
}

export default ListName;
