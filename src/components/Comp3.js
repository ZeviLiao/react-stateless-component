import React from "react"

const Comp3 = props => {
  const handleChange = e => {
    console.log(e.currentTarget.value)
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value="abc" />
    </div>
  )
}

export default Comp3
