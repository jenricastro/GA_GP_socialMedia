import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditPost = () =>{
    
    const {id} = useParams();
    const [postName, setPostName] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPostName(res.data.postName);
            setLat(res.data.lat);
            setLong(res.data.long)
            setComment(res.data.comment);
            setDate(res.data.date);
        })
        .catch((err) => console.log(err))
    }, [id])


    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:3000/posts/${id}`, {
            postName,
            comment,
            date,
            lat,
            long
        })
        .then((response)=>{
            console.log(response.data);
            navigate(`/show/${id}`)
        })
        .catch((error)=>{
            console.log(error)
        });
    };

    return(
        <div className="container text-bg-dark">
            <h1>Edit Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="post" className="form-label">Post: </label>
                    <input onChange={(event) => setPostName(event.target.value)} value={postName} type="text" className="form-control" id="post"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment: </label>
                    <input onChange={(event) => setComment(event.target.value)} value={comment} type="text" className="form-control" id="comment"/>
                </div>

        
          <br/>
          <br/>
                <input className="submit-input" type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default EditPost;