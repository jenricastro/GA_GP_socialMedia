const express = require ('express');
const bcrypt = require ('bcrypt');
const User = require ('../models/User');



    //get Session
const newSession = (req, res) =>{
    User.find({}, (err, createdSession)=>{
        res.json(createdSession, {
            currentUser: req.session.currentUser
        })
    })
}

    //Post Session

    // on sessions form submit (log in)

    // username is found and password matches
    // successful log in
  
    // username is not found - who cares about password if you don't have a username that is found?
    // unsuccessful login
  
    // username found but password doesn't match
    // unsuccessful login
  
    // some weird thing happened???????
  
    // Step 1 Look for the username
const getSession = (req, res)=>{
    User.findOne ({username: req.body.username}, (err, userFound)=>{
       // Database error
    if (err) {
        console.log(err)
        res.send('oops the db had a problem')
      } else if (!userFound) {
        // if found user is undefined/null not found etc
        res.send('Sorry, no user found')
      } else {
        // user is found yay!
        // now let's check if passwords match
        if (bcrypt.compareSync(req.body.password, userFound.password)) {
          // add the user to our session
          req.session.currentUser = userFound
          // redirect back to our home page
        //   res.redirect('/')
        } else {
          // passwords do not match
          res.send(' password does not match')
        }
      }
    })
  };


  const deleteSession = (req, res) =>{
    req.session.destroy((err, destroySession)=>{
        res.json(destroySession)
    })
  };


module.exports = {
    newSession,
    getSession,
    deleteSession
}