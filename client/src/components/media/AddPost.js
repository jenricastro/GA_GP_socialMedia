import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const AddPost = (props) =>{

    const {postList, setPostList} = props;  
    const [postName, setPostName] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/posts', {
            postName,
            image,
            comment,
            date,
            location
        })
        .then((response)=>{
            console.log(response);
            console.log(response.data);
            setPostList([...postList, response.data]);
            setPostName('');
            setImage('');
            setComment('');
            setDate('');
            setLocation('')
            navigate('/all')
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return(
        <div className="container text-bg-dark">
            <header>Post List</header>
            <Link to={'/all'}>Home</Link>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="postName" className="form-label">Post</label>
                    <input className="form-control" onChange={(event) => setPostName(event.target.value)} value={postName} id="postName" type="text"/>
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input className="form-control" onChange={(event) => setImage(event.target.value)} value={image} id="image" type="text"/>
                </div>
                <div className="mb-3">
                    <label for="comment" className="form-label">Comment</label>
                    <input className="form-control" onChange={(event) => setComment(event.target.value)} value={comment} id="comment" type="text"/>
                </div>
                <div className="mb-3">
                    <label for="date" className="form-label">Date</label>
                    <input className="form-control" onChange={(event) => setDate(event.target.value)} value={date} id="date" type="date"/>
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input className="form-control" onChange={(event) => setLocation(event.target.value)} value={location} id="location" type="text"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddPost;