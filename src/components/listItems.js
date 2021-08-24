import React, { useState } from "react";
import ListItem from "./listItem";

const ListItems = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (value) => setItems((items) => [...items, value]);
};

export default ListItems;
