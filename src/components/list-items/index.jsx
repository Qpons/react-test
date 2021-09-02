import React, { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';

const Items = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    if (newItem === '') {
      alert('Missing entry!');
    } else {
      setItems([...items, { value: newItem, completed: false }]);
    }
    console.log(items);
  };

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <Item
            item={item.value}
            key={index}
            isComplete={item.completed}
            onEdit={(item, checkStatus) => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              setItems([
                ...before,
                { value: item, completed: checkStatus },
                ...after,
              ]);
              console.log(items);
            }}
            onDelete={() => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              setItems(...before, ...after);
            }}
          />
        ))}
      </ol>
      <AddItem onSave={handleAddItem} />
    </div>
  );
};

export default Items;
