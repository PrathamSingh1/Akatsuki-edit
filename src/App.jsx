import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
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
      : "bg-gradient-to-br from-[#E1DAD8] via-[#7f8848] to-[#64750c] text-black"
    } bg-repeat bg-blend w-full`}>
    <div className='w-full min-h-screen font-["satoshi"]'>
      <BrowserRouter>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
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