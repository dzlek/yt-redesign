import React, { useContext, useEffect } from 'react'
import './App.scss'

import { ThemeContext } from './context/ThemeContext'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

import AppRouter from './app/router'

function App() {
  const { lightTheme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', lightTheme ? 'light' : 'dark')
  }, [lightTheme])

  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <AppRouter />
        </main>
      </div>

      <button onClick={toggleTheme}>ThemeToggle</button>
    </div>
  )
}

export default App
