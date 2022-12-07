const Media = require('../models/Media');

const addMedia = (req, res) =>{
    Media.create(req.body, (err, createdPost)=>{
        console.log(req.body);
        res.json(createdPost)
    })
}

const getMedia = (req, res) => {
    Media.find({}, (err, getPost)=>{
        res.json(getPost)
    })
}

module.exports ={
    addMedia,
    getMedia
}
