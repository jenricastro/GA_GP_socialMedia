import AddPost from "../components/media/AddPost";
import { useState } from "react";

const Main = (props) =>{
    
    const [postList, setPostList] = useState([]);

    return(
        <>
            <AddPost postList = {postList}
            setPostList ={setPostList}/>
        </>
    )
}

export default Main