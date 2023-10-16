import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FirstTest from "./components/iqtest1"
import SecondTest from "./components/iqtest2"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstTest/> 
    <SecondTest />
  </React.StrictMode>,
)
