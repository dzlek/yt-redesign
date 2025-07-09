import React, { useContext, useEffect } from 'react'
import './App.scss'

import { ThemeContext } from './context/ThemeContext'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import VideoCard from './components/videoCard/VideoCard'

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
          <VideoCard
            title="A Brief History Of Creation"
            author="Dollie Blair"
            date="3 days ago"
            views="80k views"
            duration="4:15"
            thumbnail="/images/сover1.png"
            variant="small"
          />
        </main>
      </div>

      <button onClick={toggleTheme}>ThemeToggle</button>
    </div>
  )
}

export default App
