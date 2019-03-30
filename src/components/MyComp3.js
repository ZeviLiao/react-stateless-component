import React from "react"
import { withHandlers } from "recompose"

const enhance = withHandlers({
  handleClick: props => event => {
    console.log(event)
    alert("<div> was clicked!")
    // props.doSomething()
  }
})

const MyComp3 = ({ handleClick }) => {
  return (
    <div>
      <br />
      <button onClick={handleClick}> + state</button>
    </div>
  )
}

export default enhance(MyComp3)
