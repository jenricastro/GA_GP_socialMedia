const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [
            true,
            'Name is required'
        ]
    },

    lastName: {
        type: String,
        required: [
            true,
            'Last Name is required'
        ]
    },

    username: {
        type: String,
        required: [
            true,
            "Please create a user name"
        ],
        unique: true
    },

    email: {
        type: String,
        required: [
            true,
            'Please add your email'
        ]
    },

    password:{
        type: String,
        required: 
        [
            true, 
            'Password is required'
        ],
        minlength: [
            8, 
            'Password must be 8 characters or longer'
        ]
    },
   
}, {timestamps: true})


const User = mongoose.model('User', userSchema);
module.exports = User