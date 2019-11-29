const express = require('express');
const UserController = require('./controllers/UserController');
const CommentController = require('./controllers/CommentController');
const CompositionController = require('./controllers/CompositionController');
const ChampionController = require('./controllers/ChampionController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: 'Bem vindo a API do Compuilder, explorador.'
    });
});

//Rotas de usuário
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);
routes.post('/login', UserController.getUserByLoginAndPassword);

routes.post('/compositions', CompositionController.store);
routes.get('/compositions/:id', CompositionController.getAllCompositionsByUserId);
routes.delete('/compositions/:id', CompositionController.delete);
routes.put('/compositions/:id', CompositionController.update);
// routes.put('/compositions/:id', Compo)
//Rotas de comentário
routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);
routes.delete('/comments/:id', CommentController.destroy);
routes.put('/comments/:id', CommentController.update);
routes.get('/comments/:id_composition', CommentController.findAllByCompositionId);
// routes.delete('/comments/:id/')

module.exports = routes;