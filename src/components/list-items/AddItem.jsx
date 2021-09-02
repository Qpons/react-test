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
          className='itemButton saveBtn'
          onClick={() => {
            onSave(newItem);
            setNewItem('');
          }}
        >
          {'Save'}
        </button>

        <button
          className='itemButton clearBtn'
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
