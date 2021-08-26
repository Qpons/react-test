import React, { useState } from "react";
import Item from "./Item";

const AddItem = ({ setItems, items }) => {
  const [newItem, setNewItem] = useState("");
  const handleEntry = (event) => {
    setNewItem(event.target.value);
    console.log(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
  };

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li>
            <Item prevItem={item} key={index} />
          </li>
        ))}
      </ol>
      <form>
        <div>
          <input type="text" value={newItem} onChange={handleEntry} />
          <button onClick={handleAddItem}>{"Save"}</button>
          <button onClick={handleAddItem}>{"Clear"}</button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
