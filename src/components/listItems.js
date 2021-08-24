import React, { Component } from "react";
import ListItem from "./listItem";

class ListItems extends Component {
  state = {
    items: [],
  };

  handleAddItem = () => {
    let items = this.state.items.concat("Test");
    console.log(items);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddItem}>Add List Item</button>
      </div>
    );
  }
}

export default ListItems;
