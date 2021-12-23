import { createElement, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './index.css'

ReactDOM.render(
  createElement(
    StrictMode,
    null,
    createElement(App),
  ),
  document.getElementById('root')
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
