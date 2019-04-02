import React from 'react'
import { render } from 'react-dom'
import Comp1 from './components/Comp1'

render(
  <div>
    <Comp1 />
    <input type="text"/>
  </div>,
  document.querySelector('#main')
)
