import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './App'
import ThemeProvider from './context/ThemeContext'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
)
