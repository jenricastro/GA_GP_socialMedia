import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/user/login/login';
import Register from './components/user/register/register';


const App = () =>{


  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("User")))
  }, [])






  return(
    <>
    <BrowserRouter>
      <Routes>
        
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element ={<Register />}/>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App