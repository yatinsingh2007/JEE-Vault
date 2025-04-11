import React , {useState} from 'react'
import {Sun , Moon} from 'lucide-react'
import {motion} from 'framer-motion'

const Name = () => {
const [darkMode, setDarkMode] = useState(true)
  return (
    <>
         <div className= {darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
            <div className='flex justify-end w-screen p-2 relative'>
                { !darkMode ? <Moon className='cursor-pointer'onClick={() => setDarkMode(!darkMode)}/> : <Sun className='cursor-pointer text-yellow-400' onClick={() => setDarkMode(!darkMode)}/> }
            </div>
            <motion.div className='flex flex-col justify-center items-center mt-48 md:mt-60' initial={{ opacity: 0 , y : -100 }} animate={{ opacity: 1 , y  :0 }} transition={{ duration: 2 , ease : 'easeOut' }}>
                <h1 className={darkMode ? 'font-semibold md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#e6e8ec] to-[#b0c4de] border-b-2 border-gray-300 pb-4' : 'font-semibold md:text-5xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#b29600] via-[#ffe680] to-[#b29600] border-b-2 border-gray-300 pb-4'}>What Should We Call You ?</h1>
                <div className='w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-yellow-400 via-slate-400 to-indigo-300 p-8 rounded-xl shadow-lg shadow-yellow-300 mt-8'>
                    <form className='flex flex-col justify-center items-center gap-6 '>
                        <div>
                            <input type='text' placeholder='Enter your name' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400'/>
                        </div>
                        <div>
                            <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>

            </motion.div>
        </div>
    </>
  )
}

export default Name
