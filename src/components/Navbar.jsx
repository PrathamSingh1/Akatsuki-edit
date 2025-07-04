import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = ({isDarkMode, toggleTheme}) => {
  return (
    <div className="w-full h-[90px] flex items-center justify-center p-10">
      <div className="flex items-center justify-between w-[80%] lg:w-[100%] rounded-[50px] h-[55px]">
        {/* Logo */}
        <Link to={"/"} className="font-bold w-[30%] lg:w-[26%] text-[19px] transition-transform duration-2000 hover:rotate-5">
        <div className="w-[100px]">
          <img src="./logo.png" alt="" />
        </div>
        </Link>

        
      

        {/* Nav Links */}
        <div className="hidden items-center gap-4 md:flex text-[15px] font-medium w-[50%]">
            <Link to={"/"}>
            <p className="hover:text-gray-400">
                Home
            </p>
            </Link>
            <Link to={"/work"}>
            <p className="hover:text-gray-400">
                Work
            </p>
            </Link>
            <Link to={"/skill"}>
            <p className="hover:text-gray-400">
                Experience
            </p>
            </Link>

            <a href="https://www.instagram.com/akatsuki_editing?igsh=MTg4ajVia3RwejRjag=="target="_blank"className="hover:text-gray-400"><FaInstagram className="h-5 w-5 hover:text-blue-700" /></a>
           
            
            <a href="https://discord.gg/zN2FEmfjNd" target="_blank" className="hover:text-gray-400"><FaDiscord className="w-5 h-5 hover:text-blue-700" /></a>
          
            <Link to={"/contact"}>
            <p className="hover:text-[#151922] bg-white dark:text-black text-white h-[35px] w-[65px] flex items-center justify-center rounded-[5px] hover:text-[16px]">
                Contact
            </p>
            </Link>
            {/* Theme Toggle Icon */}
            <button onClick={toggleTheme}>
                {isDarkMode ? (
                <MdOutlineLightMode className="h-5 w-5 cursor-pointer hover:scale-150 transition-transform duration-300" />
                ) : (
                <img className='w-[30px] cursor-pointer hover:scale-155 transition-transform duration-300 animate-spin [animation-direction:reverse] [animation-duration:2.5s]' src="saringan.png" alt="" />
                )}
          </button>
        </div>
        <div className='flex'>
          <Button title="Start a Project" />
        </div>
          
      </div>
    </div>
  );
}

export default Navbar