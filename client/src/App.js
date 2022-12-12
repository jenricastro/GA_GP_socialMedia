import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPost from '../src/components/media/AddPost';
import AllPost from "./components/media/AllPost";
import ShowPost from "./components/media/ShowPost";



const App = () =>{
  const [postList, setPostList] = useState([]);

  return(
 <>
    <>
      <BrowserRouter>
      {/* Everything inside of our Router component needs a path */}
        <Routes>

            <Route path = '/add' element={<AddPost 
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
        </Routes>
      </BrowserRouter>
      </>
    </>
 )
}

export default App