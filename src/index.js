import React from 'react';
import { render } from 'react-dom';
// import Router from './components/Router';
// import MyComp1 from './components/MyComp1';
import MyComp2 from './components/MyComp2';
import MyComp3 from './components/MyComp3';
import MyComp4 from './components/MyComp4';

const handleClick = e => {
  console.log(e);
};

// render(<MyComp1 clickEvent={handleClick} />,
//     document.querySelector('#main'));

render(
  <div>
    <MyComp2 />
    <hr />
    <MyComp3 value={0}/>
    <hr />
    <MyComp4 />
  </div>,
  document.querySelector('#main')
);
