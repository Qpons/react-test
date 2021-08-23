import React, { Component } from "react";
import ListName from "./listName";
import "./style.css";

class ListNames extends Component {
  state = {};
  render() {
    return (
      <div>
        <ListName />
        <ListName />
        <ListName />
        <ListName />
        <ListName />
      </div>
    );
  }
}

export default ListNames;
