import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const EditPost = () =>{
    
    const {id} = useParams();
    const [postName, setPostName] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPostName(res.data.postName);
            setImage(res.data.image);
            setLocation(res.data.location)
            setComment(res.data.comment);
            setDate(res.data.date);
        })
        .catch((err) => console.log(err))
    }, [id])


    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:3000/posts/${id}`, {
            postName,
            image,
            comment,
            date,
            location
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
        <>
        <h1>Edit</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-fields">
                    <label>Post:</label>
                    <input onChange={(event) => setPostName(event.target.value)}
                        value={postName}
                        name="post"
                        type="text"
                    />
                </div>

                <div className="form-fields">
                    <label>Comment</label>
                    <input
                        onChange={(event) => setComment(event.target.value)}
                        value={comment}
                        name="comment"
                        type="text"
                    />
                </div>

        
          <br/>
          <br/>
                <input className="submit-input" type="submit" value="Edit" />
            </form>
        </>
    )
}

export default EditPost;