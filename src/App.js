import React, { Component } from 'react';
import ListNames from './components/listNames';
import Items from './components/list-items/index';
import NavBar from './components/navBar';
import './App.css';

const App = () => (
  <div className='App'>
    <div className='topleft'>Qpon's Todo List</div>
    <div className='nav'>
      Current Selected List
      <br />
      (0/0) Completed
    </div>
    <div className='sidePanel'>
      <ListNames />
    </div>
    <div className='listButton'>
      <Items />
    </div>
  </div>
);

export default App;
