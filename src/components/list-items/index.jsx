import React, { useState, useContext, useEffect } from 'react';
import Items from './Items';
import { SelectContext } from '../../SelectedContext';
import { DeleteContext } from '../../SelectedContext';
import './style.css';

const SavedItems = () => {
  const { selected, setSelected } = useContext(SelectContext);
  const { deleted, setDeleted } = useContext(DeleteContext);
  const [savedItems, setSavedItems] = useState([[]]);

  useEffect(() => {
    console.log(deleted);
    if (deleted >= 0) {
      const before = savedItems.slice(0, deleted);
      const after = savedItems.slice(deleted + 1);
      setSavedItems([...before, ...after]);
      setDeleted(-1);
    }
  }, [deleted]);

  {
    if (selected >= savedItems.length) {
      const tempArray = [...savedItems, []];
      setSavedItems(tempArray);
      setSelected(selected - 1);
    }
  }

  return (
    <div>
      {savedItems.length - 1 ? (
        <Items
          items={savedItems[selected]}
          onSetSavedItems={(editedItems) => {
            const before = savedItems.slice(0, selected);
            const after = savedItems.slice(selected + 1);
            setSavedItems([...before, editedItems, ...after]);
          }}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default SavedItems;
