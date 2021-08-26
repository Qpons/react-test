import AddField from "./AddField";
import React, { useState } from "react";
import Item from "./Item";

const ListItems = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      {!!items.length &&
        items.map((item, index) => (
          <Item
            item={item}
            key={index}
            onSave={(item) => {
              const after = items.slice(index + 1);
              const before = items.slice(0, index);

              setItems([...before, item, ...after]);
            }}
          />
        ))}

      {!items.length && (
        <div>
          <div>{"No List Items"}</div>
        </div>
      )}

      <div>
        <AddField
          onSave={(item) => {
            setItems((items) => [...items, item]);
          }}
        />
      </div>
    </div>
  );
};

export default ListItems;
