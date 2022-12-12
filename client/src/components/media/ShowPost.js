import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ShowPost = () =>{
        //Because we named the variable in our App.js path id, that is its key.
        //We gave that variable its value in AllPost.js when we traveled here via "Link".
        //That will allow us to destructure the value from the useParams hook using the id key.
        //Use Params --- Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    const {id} = useParams();
        //Returns an imperative method for changing the location. Used by s, but may also be used by other elements to change the location.
    const navigate = useNavigate();
    const[post, setPost] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((response)=>{
            console.log(response.data);
            setPost(response.data);
        })
        .catch((err)=>{console.log(err)})
    }, [id])

    const handleDelete = () =>{
        axios.delete(`http://localhost:3000/posts/${id}`)
        .then((response)=>{
            console.log(response.data);
            setPost(response.data);
            navigate('/all')
        })
        .catch((err)=>{console.log(err)})
    }

    

    return(
        <>
        <h2>{post.postName}</h2>
            <p>Comment:{post.comment}</p>
            {/* <p>Comment: {oneProduct.description}</p> */}
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ShowPost;