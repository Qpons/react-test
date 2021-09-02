import React, { useState } from 'react';

const AddItem = ({ onSave }) => {
  const [newItem, setNewItem] = useState('');
  const handleEntry = (event) => {
    setNewItem(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          className='incomplete'
          onChange={handleEntry}
          type='text'
          value={newItem}
        />

        <button
          className='item-button save-btn'
          onClick={() => {
            onSave(newItem);
            setNewItem('');
          }}
        >
          {'Save'}
        </button>

        <button
          className='item-button clear-btn'
          onClick={() => {
            setNewItem('');
          }}
        >
          {'Clear'}
        </button>
      </div>
    </div>
  );
};

export default AddItem;
