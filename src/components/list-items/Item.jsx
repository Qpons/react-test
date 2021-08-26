import React, { useState } from "react";
import "./style.css";

const Item = ({ index, item, items, setItems }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempItem, setTempItem] = useState(item);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("incomplete");

  const handleEntry = (event) => {
    setTempItem(event.target.value);
  };

  return (
    <div>
      <input
        type='checkbox'
        value={item}
        checked={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
          if (isCompleted) {
            setCurrentStatus("incomplete");
          } else {
            setCurrentStatus("complete");
          }
        }}
      />
      {editStatus ? (
        <>
          <input type='text' value={tempItem} onChange={handleEntry} />

          <button
            onClick={() => {
              if (tempItem === "") {
                alert("Cannot save empty name!");
              } else {
                setEditStatus(false);
                const before = items.slice(0, index);
                const after = items.slice(index + 1);
                setItems([...before, tempItem, ...after]);
              }
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
        </>
      ) : (
        <>
          <span className={currentStatus}>{item}</span>

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
        </>
      )}
    </div>
  );
};

export default Item;
