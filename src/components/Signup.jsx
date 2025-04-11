import React , {useState} from 'react'
import {Sun , Moon} from 'lucide-react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {motion} from 'framer-motion';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            toast.success("Account created successfully!");
            navigate("/login");
        } catch (error) {
            console.log("Error signing up:", error);
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email already in use. Please log in.");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Invalid email format.");
            } else if (error.code === "auth/weak-password") {
                toast.error("Password should be at least 6 characters.");
            } else {
                toast.error(error.message);
            }
        }
    };
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
            <h1 className={darkMode ? 'text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-indigo-300 mb-10' : 'text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-slate-800 to-yellow-500 mb-10'}>Create An Account in JEE-Vault and Start your remarkable Journey</h1>
            <div className='w-full md:w-1/2 lg:w-1/3 bg-gradient-to-br from-yellow-400 via-white to-indigo-300 p-8 rounded-xl shadow-lg shadow-yellow-300 mt-32 md:mt-40'>
                <form onSubmit={handleSignup}>
                    <div className='flex flex-col mb-2'>
                        <label className='text-sm mb-1 text-slate-900'>Email</label>
                        <input type='email' placeholder='Enter your email' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='text-sm mb-1 text-slate-900'>Password</label>
                        <input type='password' placeholder='Enter your password' required className='p-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='flex justify-between mb-2'>
                        <button type='submit' className='mt-4 p-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300'>
                            Sign Up
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