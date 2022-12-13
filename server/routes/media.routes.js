const MediaController = require ('../controllers/media.controller');

module.exports = (app) =>{
    app.post('/posts', MediaController.addPost);
    app.get('/posts', MediaController.getPost);
    app.get('/posts/:id', MediaController.getById);
    app.put('/posts/:id', MediaController.updatePost);
    app.delete('/posts/:id', MediaController.deletePost)
}