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

    
    return(
        <>
            <h1> Display All Post</h1>
            <Link to={'/'}>Create</Link>
            <Link to={'/register'}>Register</Link>
            {/* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: */}
            {postList.map((post, key)=>{
                return(
                <div key= {key}>
                    
                    <Link to = {`/show/${post._id}`}><h1>{post.postName}</h1></Link>
                        
                        <br/>
                        <h3>{post.comment}</h3>
                        <br/>
                        <h4>{post.location}</h4>
                </div>
             )
                    
                
            })}
        </>
    )
}

export default AllPost