import React, { useState } from "react";
import "./style.css";

const AddEditList = ({ onAdd, onSelect }) => {
  const [listAdded, setListAdded] = useState(false);
  const [listEdit, setListEdit] = useState(false);
  const [titleName, setTitleName] = useState("");

  const handleEntry = (event) => {
    setTitleName(event.target.value);
  };

  return (
    <div className='listName'>
      {!listAdded ? (
        <>
          {" "}
          <input
            onChange={handleEntry}
            type='text'
            value={titleName}
            placeholder='Enter List Name'
          />
          <br />
          <button
            onClick={() => {
              if (titleName === "") {
                alert("List Name Cannot Be Empty!");
              } else {
                onAdd(titleName, listEdit);
                setListAdded(true);
              }
            }}
          >
            {!listEdit ? "Add List" : "Save"}
          </button>
          {!listEdit ? (
            ""
          ) : (
            <button
              onClick={() => {
                setListEdit(false);
                setListAdded(true);
              }}
            >
              Cancel
            </button>
          )}
        </>
      ) : (
        <>
          <div>{titleName}</div>

          <button onClick={onSelect}>Select</button>

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

export default AddEditList;
