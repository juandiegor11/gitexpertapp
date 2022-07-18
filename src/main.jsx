import React from 'react'
import ReactDOM from 'react-dom/client'
import GitExpertApp from './GitExpertApp'
import './styles/global.css'

ReactDOM.createRoot(document.querySelector("#header")).render(
  //<React.StrictMode>
    <GitExpertApp />
  //</React.StrictMode>
)
