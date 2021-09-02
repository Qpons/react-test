import React, { useState } from 'react';
import ListNames from './components/ListNames';
import SavedItems from './components/list-items/index';
import NavBar from './components/navBar';
import './App.css';
import { SelectContext } from './SelectedContext';

const App = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className='App'>
      <div className='top-left'>Qpon's Todo List</div>
      <div className='nav'>
        Current Selected List
        <br />
        (0/0) Completed
      </div>
      <div className='side-panel'>
        <SelectContext.Provider value={{ selected, setSelected }}>
          <ListNames />
        </SelectContext.Provider>
      </div>
      <div className='list-button'>
        <SelectContext.Provider value={{ selected, setSelected }}>
          <SavedItems />
        </SelectContext.Provider>
      </div>
    </div>
  );
};

export default App;
