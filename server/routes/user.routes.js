const UserController = require ('../controllers/user.controller');

module.exports = (app)=>{
    app.post('/register', UserController.addUser);
    app.get('/register', UserController.getUser);
};