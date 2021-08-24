import React, { useState } from "react";
import ListItem from "./listItem";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [valueInput, setValueInput] = useState("");

  const handleAddItem = () => {
    setItems((items) => [...items, valueInput]);
    //let tempValue = value + 1;
    //setItems({ tempItems });
    //setValue({ tempValue });
    console.log(items);
    console.log(valueInput);
  };

  const handleValueInput = (temp) => {
    setValueInput(temp.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleValueInput}
        value={valueInput}
        placeholder="New Value"
      />
      <button onClick={handleAddItem}>Add List Item</button>
    </div>
  );
};

export default ListItems;
