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

                <div className="form-fields">
                    <label>Latitude</label>
                    <input
                        onChange={(event) => setLat(event.target.value)}
                        value={lat}
                        name="lat"
                        type="number"
                    />
                </div>

                <div className="form-fields">
                    <label>Longitude</label>
                    <input
                        onChange={(event) => setLong(event.target.value)}
                        value={long}
                        name="long"
                        type="number"
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