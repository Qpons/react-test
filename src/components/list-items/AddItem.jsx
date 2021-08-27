import React, { useState } from "react";

const AddItem = ({ onSave }) => {
  const [newItem, setNewItem] = useState("");
  const handleEntry = (event) => {
    setNewItem(event.target.value);
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
          onClick={() => {
            onSave(newItem);
            setNewItem("");
          }}
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
