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
      <div className='topleft'>Qpon's Todo List</div>
      <div className='nav'>
        Current Selected List
        <br />
        (0/0) Completed
      </div>
      <div className='sidePanel'>
        <SelectContext.Provider value={{ selected, setSelected }}>
          <ListNames />
        </SelectContext.Provider>
      </div>
      <div className='listButton'>
        <SelectContext.Provider value={{ selected, setSelected }}>
          <SavedItems />
        </SelectContext.Provider>
      </div>
    </div>
  );
};

export default App;
