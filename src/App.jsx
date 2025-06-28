import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Skill from './components/Skill'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
    }
  return (
    <div className={`${isDarkMode 
      ? "bg-zinc-900 text-white"
      : "bg-gradient-to-bl from-[#00B4DB] to-[#0083B0] text-black"
    } bg-repeat bg-blend h-screen min-h-screen w-full transition-colors duration-500`}>
    <div className='w-full h-screen font-["satoshi"]'>
      <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App