import React, { useState } from "react";
import AddItem from "./AddItem";

const Items = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <AddItem items={items} setItems={setItems} />
    </div>
  );
};

export default Items;
