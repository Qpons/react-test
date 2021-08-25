import React from "react";
import "./style.css";

const ListItem = (props) => {
  const handleEntry = (event) => {
    props.setNewItem(event.target.value);
    console.log(event.target.value);
    console.log(props.items);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    props.setItems([...props.items, props.newItem]);
  };

  return (
    <div>
      <form>
        <div>
          <input type="text" onChange={handleEntry} />
          <button onClick={handleAddItem}>Add</button>
        </div>
      </form>
      <ol>
        {props.items.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default ListItem;
