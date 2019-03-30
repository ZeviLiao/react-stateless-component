import React from "react"
import { compose, withState, withHandlers } from "recompose"

const enhance = compose(
  withState("counter", "setCounter", 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () => setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
)

const MyComp4 = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <div>{counter}</div>
      <br />
      <button onClick={increment}> + state</button>
      <br />
      <button onClick={decrement}> - state</button>
      <br />
      <button onClick={reset}> reset state</button>
    </div>
  )
}

export default enhance(MyComp4)
