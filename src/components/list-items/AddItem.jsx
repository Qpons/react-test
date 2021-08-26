import React, { useState } from "react";

const AddItem = ({ setItems, items }) => {
  const [newItem, setNewItem] = useState("");
  const handleEntry = (event) => {
    setNewItem(event.target.value);
    console.log(event.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <div>
        <input onChange={handleEntry} type='text' value={newItem} />

        <button
          onClick={handleAddItem}
          placeholder='Please enter new todo item'
        >
          {"Save"}
        </button>

        <button
          onClick={() => {
            setNewItem("");
          }}
        >
          {"Clear"}
        </button>
      </div>
    </div>
  );
};

export default AddItem;
