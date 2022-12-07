const mongoose = require ('mongoose');

const mediaSchema = new mongoose.Schema({

    postName: {
        type: String,
        required: true,
        minLength: 3
    },

    image: {
        type: String
    },

    comment: {
        type: String,
        minLength:[
            4,
            'Please create a comment'
        ]
    },

    date:{
        type: String,
        required: true
    },

    location: {
        type: String
    }

}, {timestamps: true})

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media