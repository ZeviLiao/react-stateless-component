import React from "react"
// import './fish.scss'
import styled from "styled-components"

const Hi = styled.h1`
      color: blue;
`

const Comp2 = () => {
  return (
    <div>
      <div className="fish-edit">
        <Hi>Hello</Hi>
      </div>
    </div>
  )
}

export default Comp2
