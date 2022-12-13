const SessionController = require ('../controllers/session.controller');


module.exports = (app) =>{
    app.post('/session', SessionController.newSession);
    app.get('/session', SessionController.getSession);
    app.delete('/session', SessionController.deleteSession)
};