import React from 'react'
import { useState } from 'react'
import {Sun,Moon} from 'lucide-react'
import { motion } from 'framer-motion'
const MainPage = () => {
    const [darkMode, setDarkMode] = useState(true)
  return (
    <>
        <div className= {darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
            <div className='flex justify-end w-screen p-2 relative'>
                { !darkMode ? <Moon className='cursor-pointer'onClick={() => setDarkMode(!darkMode)}/> : <Sun className='cursor-pointer text-yellow-400' onClick={() => setDarkMode(!darkMode)}/> }
            </div>
            <div>
                <div>
                    <h1>Hello , </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainPage
