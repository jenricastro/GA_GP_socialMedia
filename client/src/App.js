import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './components/user/login/login';
// import Register from './components/user/register/register';
// import ShowPost from './components/media/ShowPost';
import Main from './view/Main';

const App = () =>{
  

//   const [ user, setLoginUser] = useState({})
// 
//   useEffect(() => {
//     setLoginUser(JSON.parse(localStorage.getItem("User")))
//   }, [])


  return(

 <>

  {/* {post.map((post)=>{
  return( */}
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path = '/' element={<Main/>}></Route>
          {/* <Route path='/' element={<ShowPost/>}/> */}
          {/* <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/register" element ={<Register />}/> */}
        
      </Routes>
    </BrowserRouter>
    </>
    
  {/* })} */}
    </>
 )
}

export default App