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

    email: {
        type: String,
        required: [
            true,
            'Please add your email'
        ]
    },

    password:{
        type: String
    }

}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User