const MediaController = require ('../controllers/media.controller');

module.exports = (app) =>{
    app.post('/posts', MediaController.addPost);
    app.get('/posts', MediaController.getPost);
}