import { useContext, useEffect, useState } from 'react'
import './App.scss'

import { ThemeContext } from './context/ThemeContext'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

import AppRouter from './app/router'

function App() {
  const { lightTheme, toggleTheme } = useContext(ThemeContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', lightTheme ? 'light' : 'dark')
  }, [lightTheme])

  return (
    <div className="app">
      <Header onBurgerClick={() => setIsSidebarOpen((prev) => !prev)} />
      <div className="app-container">
        <aside className={`sidebar-container ${isSidebarOpen ? ' ' : 'closed'}`}>
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
