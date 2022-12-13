const User = require ('../models/User')
const bcrypt = require('bcrypt');



 // Create User
const addUser = (req, res)=>{
    //overwrite the user password with the hashed password, then pass that in to our database
        //----------------------------
    //Bcrypt in an asynchronous way so we will be using it with Promises. The "10" inside the bcrypt.hash() function refers to the number of salt rounds that Bcrypt will use when generating a salt. For our purposes "10" will be a fine value here.
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser)=>{
        console.log(req.body)
        res.json(createdUser)
    } )

}

const getUser = (req, res)=>{
    User.find({}, (err, getUser)=>{
        res.json(getUser)
    })
}

module.exports ={
    addUser,
    getUser
}