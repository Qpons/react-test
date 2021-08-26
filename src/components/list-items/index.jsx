import React, { useState } from "react";
import AddItem from "./AddItem";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <li>
            <Item
              item={item}
              items={items}
              index={index}
              key={index}
              setItems={setItems}
            />
          </li>
        ))}
      </ol>
      <AddItem items={items} setItems={setItems} />
    </div>
  );
};

export default Items;
