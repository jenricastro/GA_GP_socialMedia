const mongoose = require ('mongoose');

const mediaSchema = new mongoose.Schema({

    postName: {
        type: String,
        required: true,
        minLength: 3
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

    rating: {
        type: Number,
        required: true,
        minLength: 0,
        maxLength: 5,
      },

      lat: {
        type: Number,
        required: true,
      },

      long: {
        type: Number,
        required: true,
      },

      username: {
        type: String,
        required: true,
      },

}, {timestamps: true})

const Media = mongoose.model('Media', mediaSchema);
module.exports = Media