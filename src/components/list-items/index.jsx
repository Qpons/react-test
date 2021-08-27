import React, { useState } from "react";
import AddItem from "./AddItem";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    if (newItem === "") {
      alert("Missing entry!");
    } else {
      setItems([...items, { todoItem: newItem, completed: false }]);
    }
    console.log(items);
  };

  return (
    <div>
      <ol>
        {items.map((itemObj, index) => (
          <Item
            item={itemObj.todoItem}
            key={index}
            onEdit={(item, checkStatus) => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              setItems([
                ...before,
                { todoItem: item, completed: checkStatus },
                ...after,
              ]);
              console.log(items);
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
