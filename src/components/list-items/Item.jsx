import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { SelectContext } from '../../SelectedContext';
import './style.css';

const Item = ({ completionStatus, item, onDelete, onEdit }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [tempItem, setTempItem] = useState(item);
  const { selected } = useContext(SelectContext);

  useEffect(() => {
    setEditStatus(false);
    setTempItem(item);
    console.log('Use Effect Executed');
    console.log('select');
  }, [selected]);

  const handleEntry = (event) => {
    setTempItem(event.target.value);
  };

  return (
    <div>
      <input
        type='checkbox'
        value={item}
        checked={completionStatus}
        onChange={() => {
          completionStatus = !completionStatus;
          onEdit(tempItem, completionStatus);
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
            className='itemButton saveBtn'
            onClick={() => {
              if (tempItem === '') {
                alert('Cannot save empty name!');
              } else {
                setEditStatus(false);
                onEdit(tempItem, completionStatus);
              }
            }}
          >
            {'Save'}
          </button>

          <button
            className='itemButton cancelBtn'
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
          <span className={completionStatus ? 'complete' : 'incomplete'}>
            {item}
          </span>

          <button
            className='itemButton editBtn'
            onClick={() => setEditStatus(true)}
          >
            {'Edit'}
          </button>

          <button className='itemButton deleteBtn' onClick={onDelete}>
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
