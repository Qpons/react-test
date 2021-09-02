import React, { useState } from 'react';
import AddEditList from './AddEditList';
import './style.css';

const ListNames = () => {
  const [todoLists, setTodoLists] = useState([{ id: 0, title: '' }]);

  return (
    <div>
      {todoLists.map((listName, index) => (
        <AddEditList
          key={index}
          index={index}
          currentTitle={listName.title}
          onSelect={() => {
            console.log(todoLists);
            console.log(index);
          }}
          onAdd={(titleName, editStatus) => {
            const tempArray = [...todoLists];
            tempArray[index].title = titleName;
            if (editStatus === false) {
              const tempTempArray = [
                ...tempArray,
                { id: index + 1, title: '' },
              ];
              setTodoLists(tempTempArray);
            } else {
              setTodoLists(tempArray);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ListNames;
