import React, { useState } from "react";

const Item = ({ index, item, items, setItems }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempItem, setTempItem] = useState(item);

  const handleEntry = (event) => {
    setTempItem(event.target.value);
  };

  return (
    <div>
      {editStatus ? (
        <>
          <div>
            <input type='text' value={tempItem} onChange={handleEntry} />

            <button
              onClick={() => {
                !tempItem
                  ? alert("Cannot save empty name!")
                  : setEditStatus(false);
                const before = items.slice(0, index);
                const after = items.slice(index + 1);
                setItems([...before, tempItem, ...after]);
              }}
            >
              {"Save"}
            </button>

            <button
              onClick={() => {
                setEditStatus(false);
                setTempItem(item);
              }}
            >
              {"Cancel"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            {item}

            <button
              onClick={() => {
                setEditStatus(true);
              }}
            >
              {"Edit"}
            </button>

            <button
              onClick={() => {
                const tempArray = [...items];
                tempArray.splice(index, 1);
                setItems(tempArray);
              }}
            >
              {"Delete"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
