import React from "react"
import { withState } from "recompose"

const enhance = withState("counter", "setCounter", 0)

const MyComp2 = ({ counter, setCounter }) => {
  const handleClick = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <div>{counter}</div>
      <br />
      <button onClick={handleClick}> + state</button>
    </div>
  )
}
export default enhance(MyComp2)
