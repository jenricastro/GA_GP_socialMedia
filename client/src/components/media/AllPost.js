import axios from "axios"
import {useEffect} from "react"
import { Link } from "react-router-dom";



const AllPost = (props) => {

    const {postList, setPostList} = props;
    

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(()=>{
        axios.get('http://localhost:3000/posts')
        .then((response)=> setPostList(response.data), (err)=> console.log(err))
        .catch((error)=> console.log(error))

    }, [setPostList])

    return (
        <div className="container">
            <h1>Display All Posts</h1>
            <Link to={'/'}>Create</Link>
            <Link to={'/register'}>Register</Link>
            {postList.map((post, key) => {
                return (
                    <div key={key} className="container text-bg-light border border-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="post-content">
                                    <img src={post.image} alt="post-image" className="img-responsive post-image"/>
                                    <div className="post-container">
                                        <div className="post-detail">
                                            <div className="user-info">
                                                <h6>Name Goes Here</h6>
                                            </div>
                                            {/* <div class="line-divider"></div> */}
                                            <div className="post-text">
                                                <h3>{post.postName}</h3>
                                                <p>{post.comment}</p>
                                                <Link to = {`/show/${post._id}`}>
                                                    <h7>Edit Post</h7>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllPost