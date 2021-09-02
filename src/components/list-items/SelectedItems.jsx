import React, { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';

const Items = ({ items, onSetSavedItems }) => {
  const handleAddItem = (newItem) => {
    if (newItem === '') {
      alert('Missing entry!');
    } else {
      items = [...items, { value: newItem, completed: false }];
      onSetSavedItems(items);
    }
    console.log(items);
  };

  return (
    <div>
      <ol>
        {items.map((item, index) => (
          <Item
            item={item.value}
            completionStatus={item.completed}
            key={index}
            onEdit={(item, checkStatus) => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              items = [
                ...before,
                { value: item, completed: checkStatus },
                ...after,
              ];
              onSetSavedItems(items);
              console.log(items);
            }}
            onDelete={() => {
              const tempArray = [...items];
              tempArray.splice(index, 1);
              items = tempArray;
              onSetSavedItems(items);
            }}
          />
        ))}
      </ol>
      <AddItem onSave={handleAddItem} />
    </div>
  );
};

export default Items;
