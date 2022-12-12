

const EditPost = (props) =>{

    const handleEdit = () =>{
        axios.put(`http://localhost:3000/posts/${id}`)
        .then((response)=>{
            console.log(response.data);
            setDisplayPost(response.data);
            navigate('/all')
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <>
        </>
    )
}

export default EditPost;