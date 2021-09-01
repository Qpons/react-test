import React, { useState, useContext } from "react";
import Items from "./SelectedItems";
import { SelectContext } from "../../SelectedContext";
import "./style.css";

const SavedItems = () => {
  const { selected, setSelected } = useContext(SelectContext);
  const [savedItems, setSavedItems] = useState([<Items />]);

  return (
    <div>
      {savedItems[selected]}
      {console.log(selected)}
    </div>
  );
};

export default SavedItems;
