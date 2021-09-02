import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Item = ({ item, isComplete, onDelete, onEdit }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempValue, setTempValue] = useState(item);

  const handleEntry = (event) => {
    setTempValue(event.target.value);
  };

  return (
    <div>
      <input
        type='checkbox'
        value={item}
        checked={isComplete}
        onChange={() => {
          setIsCompleted(!isComplete);
          onEdit(tempValue, isComplete);
        }}
      />

      {editStatus ? (
        <>
          <input
            className='incomplete'
            type='text'
            value={tempValue}
            onChange={handleEntry}
          />

          <button
            className='item-button save-btn'
            onClick={() => {
              if (tempValue === '') {
                alert('Cannot save empty name!');
              } else {
                setEditStatus(false);
                onEdit(tempValue, isComplete);
              }
            }}
          >
            {'Save'}
          </button>

          <button
            className='item-button cancel-btn'
            onClick={() => {
              setEditStatus(false);
              setTempValue(item);
            }}
          >
            {'Cancel'}
          </button>
        </>
      ) : (
        <>
          <span className={isComplete ? 'complete' : 'incomplete'}>{item}</span>

          <button
            className='item-button edit-btn'
            onClick={() => setEditStatus(true)}
          >
            {'Edit'}
          </button>

          <button className='item-button delete-btn' onClick={onDelete}>
            {'Delete'}
          </button>
        </>
      )}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Item;
