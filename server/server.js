//___________________
//Dependencies
//___________________
const express = require('express');
const cors = require ('cors');
const app = express ();
require('dotenv').config()
const bcrypt = require('bcrypt');

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project


//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.json({
    test: 'connected'
  })
});

require('./config/mongoose.config');
require('./controllers/media.controller');
require('./routes/media.routes')(app);
//___________________
//Listener & Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));