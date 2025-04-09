import './App.css';
import HomePage from './components/HomePage.jsx';
import Login from './components/Login.jsx'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path = '/' element = {<HomePage/>}/>
              <Route path = '/login' element = {<Login/>}/>
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App
