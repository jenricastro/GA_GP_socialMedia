//___________________
//Dependencies
//___________________
const express = require('express');
const cors = require ('cors');
const session = require('express-session');
const app = express ();

require('dotenv').config()


//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
    })
  )
  
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project


//___________________
// Routes
//___________________
//localhost:3000
//Media
require('./config/mongoose.config');
require('./controllers/media.controller');
require('./routes/media.routes')(app);

//User
require('./controllers/user.controller')
require('./routes/user.routes')(app);

//
require('./controllers/session.controller');
require('./routes/session.routes')(app);
//___________________
//Listener & Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));