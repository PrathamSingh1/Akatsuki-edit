import React from 'react'
import Stripes from './Stripes'
import Work from './Work'


const Home = ({isDarkMode}) => {
  return (
    <>
      <div className='flex w-full h-[60%] mt-10'>

          <div className='relative h-[100%] w-[50%] pl-[60px] pt-[60px]'>
              <h1 className='text-[5vw] leading-none font-medium select-none tracking-[8px] font-["Sharpie_Black"]'>Welcome ji,</h1>
              <h2 className='font-["gilroy"] text-[25px] tracking-[2px] font-[700] mb-10'>I am <span className='font-["Ninja_Naruto"] text-[#BEF219]'><i>Akatsuki Edit</i></span></h2>

              <p>Greetings, ladies and gentlemen, Allow me to introduce myself. <br /> <br /> I am a <b>self-made, passionate visual designer and video editor <br /> </b>with a sharp eye for clean, modern, and engaging visuals. <br /> I believe in edits that not only look good but feel good - <br /> transforming raw footage into <b>well-structured, <br /> polished stories </b> that connect with people. </p>
          </div>

          <div className='relative w-[50%] text-center pt-[10px] pr-[60px] mb-20'>
              <img className={`w-[90%] rounded-[300px] ${ isDarkMode ? 'mix-blend-screen' : 'mix-blend-overlay'} `} src="hero.png" alt="" />
          </div>
          
      </div>
      <Work />
    </>
  )
}

export default Home