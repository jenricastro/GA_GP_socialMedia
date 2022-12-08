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

    userName: {
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

    //We can add in a custom validator called validate into our schema in the same sort of way that we have required or minlength and we need to provide it an object that contains a validator function (something that will return true or false) and the message we want to display if the value is not valid.

    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
      
}, {timestamps: true})


const User = mongoose.model('User', userSchema);
module.exports = User