import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-router-dom'
const MainPage = ({ name }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  return (
    <>
      <div className={darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
        <div className='flex justify-end w-screen p-2 relative'>
          {!darkMode
            ? <Moon className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} />
            : <Sun className='cursor-pointer text-yellow-400' onClick={() => setDarkMode(!darkMode)} />}
        </div>
        <div className='flex justify-start items-center m-4'>
          <h1 className='text-lg font-semibold md:text-3xl'>{greeting}, <span className='text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 to-zinc-600 md:text-3xl'>{name}</span></h1>
        </div>
        <div className='md:flex md:justify-around mt-56 items-center flex flex-col gap-10'>
            <div className='bg-slate-800 p-10 flex flex-col justify-around items-center gap-8 rounded-2xl'>
                <div>
                    <img src='https://miro.medium.com/v2/resize:fit:1400/1*ogpyHbsWi7mBZIod3_aiug.png' alt='math-logo' className='h-20 w-32 rounded-lg'/>
                </div>
                <p className='text-center text-white font-semibold'>Mathematics</p>
                <button className='bg-yellow-300 p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-black'>
                    <Link to = '/math'>Get Started</Link>
                </button>
            </div>
            <div className='bg-slate-800 p-10 flex flex-col justify-around items-center gap-8 rounded-2xl'>
                <div>
                    <img src='https://images.unsplash.com/photo-1576319155264-99536e0be1ee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGh5c2ljc3xlbnwwfHwwfHx8MA%3D%3D' alt='physics-logo' className='h-20 w-32 rounded-lg'/>
                </div>
                <p className='text-center text-white font-semibold'>Physics</p>
                <button className='bg-yellow-300 p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-black'>
                    <Link to = '/math'>Get Started</Link>
                </button>
            </div>
            <div className='bg-slate-800 p-10 flex flex-col justify-around items-center gap-8 rounded-2xl'>
                <div>
                    <img src='https://thumbs.dreamstime.com/b/molecular-formula-laboratory-equipment-blue-background-science-organic-chemistry-concept-molecular-formula-laboratory-133218807.jpg' alt='chemistry-logo' className='h-20 w-32 rounded-lg'/>
                </div>
                <p className='text-center text-white font-semibold'>Chemistry</p>
                <button className='bg-yellow-300 p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-black'>
                    <Link to = '/math'>Get Started</Link>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
