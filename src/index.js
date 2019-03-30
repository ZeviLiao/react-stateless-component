import React from 'react';
import { render } from 'react-dom';
// import Router from './components/Router';
import MyComp1 from './components/MyComp1';

const handleClick = e => {
  console.log(e);
};

render(<MyComp1 clickEvent={handleClick} />, 
    document.querySelector('#main'));
