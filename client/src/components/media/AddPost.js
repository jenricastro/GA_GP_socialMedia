import axios from "axios";
import { useState } from "react";

const AddPost = (props) =>{


    const {postList, setPostList} = props;  
    const [postName, setPostName] = useState('');
    const [image, setImage] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

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
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return(
        <div>
            <header>Post List</header>

            <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <label>Post</label>
                    <input onChange={(event) => setPostName(event.target.value)}
                        //We set our value to title here mainly to help us clear out the inputs on submission
                        value={postName}
                        name="postName"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Image</label>
                    <input onChange={(event) => setImage(event.target.value)}
                        value={image}
                        name="image"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Comment</label>
                    <input
                        onChange={(event) => setComment(event.target.value)}
                        value={comment}
                        name="comment"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Date</label>
                    <input
                        onChange={(event) => setDate(event.target.value)}
                        value={date}
                        name="date"
                        type="text"
                    />
                </div>

                <br />

                <div className="form-fields">
                    <label>Location</label>
                    <input
                        onChange={(event) => setLocation(event.target.value)}
                        value={location}
                        name="location"
                        type="text"
                    />
                </div>

                

                <br />
                {/* Could also be a button element. Try it! */}
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    )
}

export default AddPost;