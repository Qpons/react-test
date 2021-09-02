import React, { useState } from 'react';
import ListNames from './components/ListNames';
import SavedItems from './components/list-items/index';
import NavBar from './components/NavBar';
import './App.css';
import { SelectContext } from './SelectedContext';
import { DeleteContext } from './SelectedContext';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [deleted, setDeleted] = useState(-1);

  return (
    <div className='App'>
      <div className='top-left'>Qpon's Todo List</div>
      <div className='nav'>
        Current Selected List
        <br />
        (0/0) Completed
      </div>
      <div className='side-panel'>
        <DeleteContext.Provider value={{ deleted, setDeleted }}>
          <SelectContext.Provider value={{ selected, setSelected }}>
            <ListNames />
          </SelectContext.Provider>
        </DeleteContext.Provider>
      </div>
      <div className='list-button'>
        <DeleteContext.Provider value={{ deleted, setDeleted }}>
          <SelectContext.Provider value={{ selected, setSelected }}>
            <SavedItems />
          </SelectContext.Provider>
        </DeleteContext.Provider>
      </div>
    </div>
  );
};

export default App;
