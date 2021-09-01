import React, { useState, useContext } from "react";
import Items from "./SelectedItems";
import { SelectContext } from "../../SelectedContext";
import "./style.css";

const SavedItems = () => {
  const { selected, setSelected } = useContext(SelectContext);
  const [savedItems, setSavedItems] = useState([[]]);

  {
    if (selected >= savedItems.length) {
      const tempArray = [...savedItems, []];
      setSavedItems(tempArray);
    }
  }

  return (
    <div>
      {savedItems.length ? (
        <Items
          items={savedItems[selected]}
          onSetSavedItems={(editedItems) => {
            const before = savedItems.slice(0, selected);
            const after = savedItems.slice(selected);
            setSavedItems([...before, editedItems, ...after]);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SavedItems;
