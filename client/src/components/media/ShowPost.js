import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const ShowPost = (props) => {

    const [post, setPost] = useState([])

    const getPost = () =>{
        axios.get('http://localhost:3000/posts')
        .then((res)=>setPost(res.data), (err)=> console.log(err))
        .catch((error)=> console.log(error))
    }

    useEffect(()=>{
        getPost()
    }, [])

    return(
        <>
        {/* <div className="card mb-4">
            <img src={props.post.image} className="card-img-top" alt="post" />
            <div className="card-body">
                <h3 className="card-title">Name: {props.post.postName}</h3>
                <h5 className="card-text">Comment: {props.post.comment}</h5>
                <h5 className="card-text">Date: {props.post.date}</h5>
                <h5 className="card-text">Location: {props.post.location}</h5>
            </div>
        </div> */}
            <h1>test</h1>
        </>

    )
}

export default ShowPost