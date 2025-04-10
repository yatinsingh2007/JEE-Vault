import React , {useState} from 'react'
import {Sun , Moon} from 'lucide-react'
import {motion} from 'framer-motion'
const Signup = () => {
    const [darkMode, setDarkMode] = useState(true)
  return (
   <>
    <div className={darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
        <div className='flex justify-end w-full p-4'>
            {!darkMode ? (
            <Moon className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} />
            ) : (
            <Sun className='cursor-pointer text-amber-400' onClick={() => setDarkMode(!darkMode)} />
            )}
        </div>
        <motion.div className='flex flex-col items-center justify-center px-4 py-10 md:px-20' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }}>
            <h1 className='md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 text-3xl'>Create An Account in JEE-Vault and Start your remarkable Journey</h1>
            <div className='w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-yellow-400 via-white to-indigo-300 p-8 rounded-xl shadow-lg shadow-yellow-300 mt-32 md:mt-40'>
                <form>
                    <div className='flex flex-col'>
                        <label className='text-sm mb-1 text-slate-900'>Email</label>
                        <input type='email' placeholder='Enter your email' required className='p-2 rounded-md bg-white text-white focus:outline-none focus:ring-2 focus:ring-purple-400'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm mb-1 text-slate-900'>Password</label>
                        <input type='password' placeholder='Enter your password' required className='p-2 rounded-md bg-white text-white focus:outline-none focus:ring-2 focus:ring-purple-400'/>
                    </div>
                    <div className='flex justify-between'>
                        <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
                            Sign Up
                        </button>
                        <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
                            Sign up with Google
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    </div>
   </>
  )
}
export default Signup