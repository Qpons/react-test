import React, { useState } from "react";
import ListItem from "./listItem";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  return (
    <div>
      <ListItem
        items={items}
        newItem={newItem}
        setNewItem={setNewItem}
        setItems={setItems}
      />
    </div>
  );
};

export default ListItems;
