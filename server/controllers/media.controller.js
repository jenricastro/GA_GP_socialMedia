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

module.exports ={
    addMedia,
    getMedia
}
