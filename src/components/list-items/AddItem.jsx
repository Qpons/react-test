import React, { useState } from "react";

const AddItem = ({ setItems, items }) => {
  const [newItem, setNewItem] = useState("");
  const handleEntry = (event) => {
    setNewItem(event.target.value);
    console.log(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem === "") {
      alert("Missing entry!");
    } else {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div>
      <div>
        <input
          className='incomplete'
          onChange={handleEntry}
          type='text'
          value={newItem}
        />

        <button
          className='itemButton saveBtn'
          onClick={handleAddItem}
          placeholder='Please enter new todo item'
        >
          {"Save"}
        </button>

        <button
          className='itemButton clearBtn'
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
