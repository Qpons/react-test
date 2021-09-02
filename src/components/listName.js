import React, { Component } from 'react';
import './style.css';

const ListName = () => (
  <div className='list-name'>
    <input type='text' placeholder='Enter List Name' />
    <br />
    <button>Add List</button>
  </div>
);

export default ListName;
