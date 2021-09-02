import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { SelectContext } from '../SelectedContext';
import './style.css';

const AddEditList = ({ currentTitle, onAdd, index }) => {
  const [listAdded, setListAdded] = useState(false);
  const [listEdit, setListEdit] = useState(false);
  const [titleName, setTitleName] = useState('');
  const { selected, setSelected } = useContext(SelectContext);

  const handleEntry = (event) => {
    setTitleName(event.target.value);
  };

  return (
    <div className={index === selected ? 'selected' : 'not-selected'}>
      {!listAdded ? (
        <>
          {' '}
          <input
            onChange={handleEntry}
            type='text'
            value={titleName}
            placeholder='Enter List Name'
          />
          <br />
          <button
            onClick={() => {
              if (titleName === '') {
                alert('List Name Cannot Be Empty!');
              } else {
                onAdd(titleName, listEdit);
                setListAdded(true);
                setSelected(index + 1);
              }
            }}
          >
            {!listEdit ? 'Add List' : 'Save'}
          </button>
          {!listEdit ? (
            ''
          ) : (
            <button
              onClick={() => {
                setListEdit(false);
                setListAdded(true);
                setTitleName(currentTitle);
              }}
            >
              Cancel
            </button>
          )}
        </>
      ) : (
        <>
          <div>{titleName}</div>

          <button onClick={() => setSelected(index)}>Select</button>

          <button
            onClick={() => {
              setListEdit(true);
              setListAdded(false);
            }}
          >
            Edit
          </button>

          <button>Delete</button>
        </>
      )}
    </div>
  );
};

AddEditList.propTypes = {
  currentTitle: PropTypes.string,
  onAdd: PropTypes.func,
  id: PropTypes.number,
};

export default AddEditList;
