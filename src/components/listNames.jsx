import React, { useState, use } from 'react';
import AddEditList from './AddEditList';
import './style.css';

const ListNames = () => {
  const [todoLists, setTodoLists] = useState(['']);

  return (
    <div>
      {todoLists.map((value, index) => (
        <AddEditList
          key={index}
          index={index}
          currentTitle={value}
          onAdd={(titleName, editStatus) => {
            const tempArray = [...todoLists];
            tempArray[index] = titleName;
            if (editStatus === false) {
              const tempTempArray = [...tempArray, ''];
              setTodoLists(tempTempArray);
            } else {
              setTodoLists(tempArray);
            }
          }}
          onDelete={(deleteIndex) => {
            console.log(deleteIndex);
            const before = todoLists.slice(0, deleteIndex);
            const after = todoLists.slice(deleteIndex + 1);
            setTodoLists([...before, ...after]);
            console.log(todoLists);
          }}
        />
      ))}
    </div>
  );
};

export default ListNames;
