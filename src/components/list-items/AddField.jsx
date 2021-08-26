import React, { useState } from "react";

const AddField = ({ item, onSave }) => {
  const [newItem, setNewItem] = useState(item);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setNewItem(value);
          }}
          value={newItem}
        />

        <button
          onClick={() => {
            onSave(newItem);

            setNewItem("");
          }}
        >
          {"Add Item"}
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

export default AddField;
