import React, { useState } from "react";

const Item = ({ prevItem }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempItem, setTempItem] = useState(prevItem);
  const [cancelItem, setCancelItem] = useState(prevItem);

  const handleEntry = (event) => {
    setTempItem(event.target.value);
  };

  return (
    <div>
      {editStatus ? (
        <>
          <div>
            <input type="text" value={tempItem} onChange={handleEntry} />
            <button
              onClick={() => {
                setEditStatus(false);
                setCancelItem(tempItem);
              }}
            >
              {"Save"}
            </button>
            <button
              onClick={() => {
                setEditStatus(false);
                setTempItem(cancelItem);
              }}
            >
              {"Cancel"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            {tempItem}
            <button
              onClick={() => {
                setEditStatus(true);
              }}
            >
              {"Edit"}
            </button>
            <button>{"Delete"}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
