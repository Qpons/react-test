import React, { useState } from "react";
import AddItem from "./AddItem";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    if (newItem === "") {
      alert("Missing entry!");
    } else {
      setItems([...items, newItem]);
    }
  };

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <Item
            item={item}
            key={index}
            onEdit={(item) => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              setItems([...before, item, ...after]);
            }}
            onDelete={() => {
              const tempArray = [...items];
              tempArray.splice(index, 1);
              setItems(tempArray);
            }}
          />
        ))}
      </ol>
      <AddItem onSave={handleAddItem} />
    </div>
  );
};

export default Items;
