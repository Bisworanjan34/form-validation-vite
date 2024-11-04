import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import header from './components/header.js'
import Section from './Section.jsx'


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
  
   <Section></Section>
    <App></App>

  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
