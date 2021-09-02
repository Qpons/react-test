import React, { useState, useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { SelectContext } from '../../SelectedContext';
import './style.css';

const Item = ({ completionStatus, item, onDelete, onEdit }) => {
  const [editStatus, setEditStatus] = useState(false);
  const tempItem = useRef();
  const { selected } = useContext(SelectContext);

  useEffect(() => {
    setEditStatus(false);
    tempItem.current = item;
  }, [selected]);

  const handleEntry = (event) => {
    tempItem.current = event.target.value;
  };

  return (
    <div>
      <input
        type='checkbox'
        value={item}
        checked={completionStatus}
        onChange={() => {
          completionStatus = !completionStatus;
          onEdit(tempItem.current, completionStatus);
        }}
      />

      {editStatus ? (
        <>
          <input
            className='incomplete'
            type='text'
            value={tempItem.current}
            onChange={handleEntry}
          />

          <button
            className='item-button save-btn'
            onClick={() => {
              if (tempItem.current === '') {
                alert('Cannot save empty name!');
              } else {
                setEditStatus(false);
                onEdit(tempItem.current, completionStatus);
              }
            }}
          >
            {'Save'}
          </button>

          <button
            className='item-button cancel-btn'
            onClick={() => {
              setEditStatus(false);
              tempItem.current = item;
            }}
          >
            {'Cancel'}
          </button>
        </>
      ) : (
        <>
          <span className={completionStatus ? 'complete' : 'incomplete'}>
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
  completionStatus: PropTypes.bool,
  item: PropTypes.string,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Item;
