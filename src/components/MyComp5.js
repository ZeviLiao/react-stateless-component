import React from "react"
import { withStateHandlers } from "recompose"

const MyComp5 = withStateHandlers(
  ({ initialCounter = 0 }) => ({
    counter: initialCounter
  }),
  {
    incrementOn: ({ counter }) => value => ({
      counter: counter + value
    }),
    decrementOn: ({ counter }) => value => ({
      counter: counter - value
    }),
    resetCounter: (_, { initialCounter = 0 }) => () => ({
      counter: initialCounter
    })
  }
)(({ counter, incrementOn, decrementOn, resetCounter }) => {
  return (
    <div>
      <div>{counter}</div>
      <br />
      <button onClick={() => incrementOn(1)}>Inc</button>
      <button onClick={() => decrementOn(1)}>Dec</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
})

export default MyComp5
