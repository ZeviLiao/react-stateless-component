import React from "react"
import { render } from "react-dom"
import Comp2 from "./components/Comp2"
import Comp3 from "./components/Comp3"

const AllComp = () => (
  <div>
    <Comp2 />
    <hr />
    <Comp3 />
  </div>
)

render(
  <AllComp />,
  document.querySelector("#main"),
)
