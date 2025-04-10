import React, { useState } from 'react'
import {Sun,Moon} from 'lucide-react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
const HomePage = () => {
  const [darkMode , setDarkMode] = useState(true)
  return (
    <>
        <div className= {darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
            <div className='flex justify-end w-screen p-2 relative'>
                { !darkMode ? <Moon className='cursor-pointer'onClick={() => setDarkMode(!darkMode)}/> : <Sun className='cursor-pointer text-yellow-400' onClick={() => setDarkMode(!darkMode)}/> }
            </div>
            <div className='text-center flex flex-col justify-center items-center gap-10 pt-48 relative'>
                <motion.div initial={{ opacity: 0 , y : -100 }} animate={{ opacity: 1 , y  :0 }} transition={{ duration: 2 , ease : 'easeOut' }}><h1 className={darkMode ? `md:text-8xl md:font-bold text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#e6e8ec] to-[#b0c4de]` : `md:text-8xl md:font-bold text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#b29600] via-[#ffe680] to-[#b29600]`}>Welcome To JEE-Vault</h1></motion.div>
                <div><p className='md:text-4xl font-thin text-2xl md:p-0 p-2'>Built for Students. Backed by Purpose.</p></div>
            </div>
            <motion.div className='pt-40 text-left md:px-28 px-20 md:text-2xl text-lg font-semibold flex flex-col justify-center items-start gap-10' initial={{ opacity: 0 , y : 100 }} animate={{ opacity: 1 , y  :0 }} transition={{ duration: 2 , ease : 'easeOut' }}>
              <div>
                <h1 className={darkMode ? 'font-semibold md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#e6e8ec] to-[#b0c4de] border-b-2 border-gray-300 pb-4' : 'font-semibold md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#b29600] via-[#ffe680] to-[#b29600] border-b-2 border-gray-300 pb-4'}>About Us - JEEVault</h1>
              </div>
              <div>
                <p className='border-l-2 border-neutral-400 pl-2'>JEEVault is your go-to vault of high-quality educational videos designed to help you crack the JEE with confidence.</p>
              </div>
              <div>
                <p className='border-l-2 border-neutral-400 pl-2'>We've handpicked the most useful, clear, and effective video content across Physics, Chemistry, and Math to make your prep smoother. No clutter. No distractions. Just pure learning.</p>
              </div>
              <div>
                <p className='border-l-2 border-neutral-400 pl-2'>Whether you're revising a tricky concept or exploring something new, JEEVault brings all the important videos together in one place—so you can focus on what really matters.</p>
              </div>
            </motion.div>
            <div className='p-20 flex justify-center gap-10'>
              <button className="p-2 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform">
                <Link to='/signup'>Sign Up</Link>
              </button>
              <button className="p-2 px-6 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform">
                <Link to='/login'>Login</Link>
              </button>
            </div>
        </div>
    </>
  )
}

export default HomePage
