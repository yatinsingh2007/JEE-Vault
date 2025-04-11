import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
      toast.success('Logged in successfully!')
    } catch (error) {
      console.error("Login error:", error.code);
  
      if (error.code === "auth/user-not-found") {
        toast.error("User not found. Please sign up first.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else {
        toast.error(error.message);
      }
  }
}
  return (
    <div className={darkMode ? 'bg-black text-gray-300 min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className='flex justify-end w-full p-4'>
        {!darkMode ? (
          <Moon className='cursor-pointer' onClick={() => setDarkMode(!darkMode)} />
        ) : (
          <Sun className='cursor-pointer text-amber-400' onClick={() => setDarkMode(!darkMode)} />
        )}
      </div>
      <motion.div className='flex flex-col items-center justify-center px-4 py-10 md:px-20' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }}>
        <h1 className={darkMode ? 'text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-indigo-300 mb-10' : 'text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-slate-800 to-yellow-500 mb-10'}>
          Login to JEE-Vault
        </h1>
        <div className='w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-yellow-400 via-white to-indigo-300 p-8 rounded-xl shadow-lg shadow-yellow-300 mt-8'>
          <p className='text-center text-lg text-slate-950'>Already have an account? Login below.</p>
          <form className='flex flex-col gap-6' onSubmit={handleLogin}>
            <div className='flex flex-col'>
              <label className='text-sm mb-1 text-slate-900'>Email</label>
              <input type='email' placeholder='Enter your email' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col'>
              <label className='text-sm mb-1 text-slate-900'>Password</label>
              <input type='password' placeholder='Enter your password' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400' onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
              Login
            </button>
            <Link to = '/forgot-password' className='text-sm text-blue-500 hover:underline'>Forgot Password ?</Link>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage
