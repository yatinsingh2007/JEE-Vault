import './App.css';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Signup from './components/Signup.jsx';
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path = '/' element = {<HomePage/>}/>
              <Route path = '/login' element = {<Login/>}/>
              <Route path = '/signup' element = {<Signup/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App
