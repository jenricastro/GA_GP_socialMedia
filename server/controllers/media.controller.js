const Media = require('../models/Media');

const addPost = (req, res) =>{
    Media.create(req.body, (err, createdPost)=>{
        console.log(req.body);
        res.json(createdPost)
    })
}

const getPost = (req, res) => {
    Media.find({}, (err, getPost)=>{
        res.json(getPost)
    })
}

const getById= (req, res)=>{
    Media.findOne({_id: req.params.id}, (err, postById)=>{
        res.json(postById)
    })
}

const updatePost = (req, res) =>{
    Media.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost)=>{
        res.json(updatedPost)
    })
}

const deletePost = (req, res)=>{
    Media.findByIdAndDelete({_id: req.params.id}, (err, deletedPost)=>{
        res.json(deletedPost)
    })
}

module.exports ={
    addPost,
    getPost,
    getById,
    updatePost,
    deletePost
}
