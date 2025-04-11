import React , {useState} from 'react'
import { Sun, Moon } from 'lucide-react'
const ForgotPassword = () => {
  const [darkMode, setDarkMode] = useState(true);
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
            <div>
              <form>
                <div className='flex flex-col items-center justify-center px-4 py-10 md:px-20'>
                    <div className='w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-yellow-400 via-white to-indigo-300 p-8 rounded-xl shadow-lg shadow-yellow-300 mt-8'>
                        <p className='text-center text-lg text-slate-950'>Enter your email to reset your password.</p>
                        <div className='flex flex-col'>
                            <label className='text-sm mb-1 text-slate-900'>Email</label>
                            <input type='email' placeholder='Enter your email' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400'/>
                        </div>
                        <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
                          Reset Password
                        </button>
                    </div>
                </div>
              </form>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword
