import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

AddItem.propTypes = {
  onSave: PropTypes.func,
};

export default AddItem;
