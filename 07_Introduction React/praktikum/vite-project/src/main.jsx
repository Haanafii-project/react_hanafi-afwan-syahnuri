import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hook from './components/Hook';
import UseEffectComponent from './components/UseEffectComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseEffectComponent />
  </React.StrictMode>,
)
