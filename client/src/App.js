import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../src/components/media/AddPost';
import AllPost from "./components/media/AllPost";
import ShowPost from "./components/media/ShowPost";
import EditPost from "./components/media/EditPost";
import Register from "./components/user/register/register";
import '../src/App.css'
import Layout from "./components/layout/Layout";

const App = () =>{
  const [postList, setPostList] = useState([]);

  return(
    <div>
      <>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<AddPost postList={postList} setPostList={setPostList}/>}></Route>
              <Route path='/all' element={<AllPost postList={postList} setPostList={setPostList}/>}></Route>
              <Route path='/show/:id' element={<ShowPost/>}></Route>
              <Route path='/edit/:id' element={<EditPost/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App