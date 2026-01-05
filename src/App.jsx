import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Writing from './components/Writing'
import Contact from './components/Contact'
import Experience from './components/Experience'
import logo from './assets/logo.png'

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')

  const renderPage = () => {
    switch(currentPage) {
      case 'portfolio':
        return <Portfolio />
      case 'about':
        return <About />
      case 'writing':
        return <Writing />
      case 'contact':
        return <Contact />
      case 'experience':
        return <Experience />
      default:
        return <Portfolio />
    }
  }

  return (
    <div className="app">
      <nav className="navigation">
        <button 
          className={currentPage === 'portfolio' ? 'active' : ''}
          onClick={() => setCurrentPage('portfolio')}
        >
          Projects
        </button>
        <button 
          className={currentPage === 'about' ? 'active' : ''}
          onClick={() => setCurrentPage('about')}
        >
          About
        </button>
        <button 
          className={currentPage === 'experience' ? 'active' : ''}
          onClick={() => setCurrentPage('experience')}
        >
          Experience
        </button>
        <button 
          className={currentPage === 'writing' ? 'active' : ''}
          onClick={() => setCurrentPage('writing')}
        >
          Writings
        </button>
        <button 
          className={currentPage === 'contact' ? 'active' : ''}
          onClick={() => setCurrentPage('contact')}
        >
          Contact
        </button>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
      
      <footer className="minimal-footer">
        <p>Made by Aarchee Kalsariya • © 2026 All rights reserved</p>
      </footer>
      
      <div className="corner-logo">
        <img src={logo} alt="Aarchie's Logo" />
      </div>
    </div>
  )
}

export default App
