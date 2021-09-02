import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Item = ({ item, onDelete, onEdit }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempItem, setTempItem] = useState(item);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEntry = (event) => {
    setTempItem(event.target.value);
  };

  return (
    <div>
      <input
        type='checkbox'
        value={item}
        checked={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
          onEdit(tempItem, isCompleted);
        }}
      />

      {editStatus ? (
        <>
          <input
            className='incomplete'
            type='text'
            value={tempItem}
            onChange={handleEntry}
          />

          <button
            className='item-button save-btn'
            onClick={() => {
              if (tempItem === '') {
                alert('Cannot save empty name!');
              } else {
                setEditStatus(false);
                onEdit(tempItem, isCompleted);
              }
            }}
          >
            {'Save'}
          </button>

          <button
            className='item-button cancel-btn'
            onClick={() => {
              setEditStatus(false);
              setTempItem(item);
            }}
          >
            {'Cancel'}
          </button>
        </>
      ) : (
        <>
          <span className={isCompleted ? 'complete' : 'incomplete'}>
            {item}
          </span>

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
