import React, { useState } from "react";
import "../style.css";

const Item = ({ editLabel = "Edit", item = "", onSave }) => {
  const [newItem, setNewItem] = useState(item);

  const [editing, setEditing] = useState(false);

  const handleInput = ({ target: { value } }) => {
    setNewItem(value);
  };

  return (
    <div>
      <div>
        {editing ? (
          <>
            <input type="text" onChange={handleInput} value={newItem} />

            <button
              onClick={() => {
                onSave(newItem);

                setNewItem("");

                setEditing(false);
              }}
            >
              {"Save"}
            </button>

            <button
              onClick={() => {
                if (!newItem) {
                  // TODO: Add function to remove Item if newItem is empty
                }

                setNewItem(item);

                setEditing(false);
              }}
            >
              {"Cancel"}
            </button>
          </>
        ) : (
          <>
            <span>{item}</span>

            <button
              onClick={() => {
                setNewItem(item);

                setEditing(true);
              }}
            >
              {editLabel}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
