import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from "react"
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom"



const ShowPost = (props) => {

    const [post, setPost] = useState([])



  const getPost = () =>{
    axios.get('http://localhost:3000/posts')
    .then((response)=> setPost(response.data), (err)=> console.log(err))
    .catch((error)=> console.log(error))
};

    useEffect(()=>{
        getPost()
    }, [])

    return(
        <>
            <h1> Display All Post</h1>
            {post.map((post)=>{

                return(
                    <>
                        {props.post.postName}
                    
                    </>
                )
            })}
        </>

    )
}

export default ShowPost