import React from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

function App() {
  return (
<div className="app">
      <Header />
      <div className="app-container">
        <Sidebar />
        <main>Main</main>
      </div>
    </div>
  )
}

export default App
