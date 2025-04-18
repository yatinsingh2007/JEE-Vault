import './App.css';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Signup from './components/Signup.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Name from './components/Name.jsx';
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path = '/' element = {<HomePage/>}/>
              <Route path = '/login' element = {<Login/>}/>
              <Route path = '/signup' element = {<Signup/>}/>
              <Route path = '/forgot-password' element = {<ForgotPassword/>}/>
              <Route path='/name' element={<Name/>}/>
          </Routes>
       </BrowserRouter>
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}
export default App
