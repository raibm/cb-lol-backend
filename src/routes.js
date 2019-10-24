const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: 'Bem vindo a API do Compuilder, explorador.'
    });
})

//Rotas de usuário
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

//Rotas de campeão
routes.get('/champions', ChampionController.index);

//Rotas de comentário
routes.post('/comments', CommentController.stores);
routes.get('/comments', ComentController.index);
routes.delete('/comments/:id/')

module.exports = routes;