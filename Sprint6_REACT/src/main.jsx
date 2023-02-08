import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Welcome from "./components/escena"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
)
