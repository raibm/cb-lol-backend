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
routes.delete('/users/:id/', UserController.delete);

//Rotas de campeão
routes.get('/champions', ChampionController.index);

//Rotas de comentário
routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);
// routes.delete('/comments/:id/')

module.exports = routes;