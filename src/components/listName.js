import React, { Component } from "react";
import "./style.css";

class ListName extends Component {
  state = {};
  render() {
    return (
      <form className="listName">
        <input type="text" value="Enter List Name" />
        <br />
        <button>Add List</button>
      </form>
    );
  }
}

export default ListName;
