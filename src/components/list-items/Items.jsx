import React from 'react';
import PropTypes from 'prop-types';
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
            }}
            onDelete={() => {
              const before = items.slice(0, index);
              const after = items.slice(index + 1);
              items = [...before, ...after];
              onSetSavedItems(items);
            }}
          />
        ))}
      </ol>
      <AddItem onSave={handleAddItem} />
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.array,
  onSetSavedItems: PropTypes.func,
};

export default Items;
