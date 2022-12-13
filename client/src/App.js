import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../src/components/media/AddPost';
import AllPost from "./components/media/AllPost";
import ShowPost from "./components/media/ShowPost";
import EditPost from "./components/media/EditPost";
import Register from "./components/user/register/register";
import '../src/App.css'
import Layout from "./components/layout/Layout";
import Map from "./components/media/Map";

const App = () => {
  const [postList, setPostList] = useState([])


const App = () =>{
  const [postList, setPostList] = useState([]);

  return(
 <>
    <>
      <BrowserRouter>
      {/* Everything inside of our Router component needs a path */}
        <Routes>

            <Route path = '/' element={<AddPost 
              postList = {postList}
              setPostList ={setPostList}
            />}>
            </Route>

            <Route path = '/all' element={<AllPost 
              postList = {postList}
              setPostList ={setPostList}
            />}>
            </Route>

            <Route path="/show/:id" element={<ShowPost/>}></Route>
            <Route path="/edit/:id" element={<EditPost/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
    </div>
  )
}

export default App