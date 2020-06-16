import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Consilium from "./components/Consilium"


ReactDOM.render(
  <Router>
      <Consilium />
  </Router>
  , document.getElementById('root'))
