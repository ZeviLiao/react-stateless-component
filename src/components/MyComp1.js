import React, { useState } from "react"

const MyComp1 = props => {
  const [value, setValue] = useState(0)

  const handleClick = e => {
    console.log(e)
  }
  const handleAddValue = () => {
    setValue(value + 1)
  }
  return (
    <div>
      <div>{value}</div>
      <br />
      <button onClick={handleAddValue}> hook keep state</button>
      <br />
      <button onClick={handleClick}>Component click</button>
      <br />
      <button onClick={props.clickEvent}>parent props click</button>
    </div>
  )
}

export default MyComp1
