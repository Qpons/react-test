import React, { Component } from 'react';
import ListNames from './components/listNames';
import Items from './components/list-items/index';
import NavBar from './components/navBar';
import './App.css';

const App = () => (
  <div className='App'>
    <div className='top-left'>Qpon's Todo List</div>
    <div className='nav'>
      Current Selected List
      <br />
      (0/0) Completed
    </div>
    <div className='side-panel'>
      <ListNames />
    </div>
    <div className='list-button'>
      <Items />
    </div>
  </div>
);

export default App;
