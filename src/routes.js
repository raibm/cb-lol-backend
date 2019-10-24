const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        message: 'Bem vindo a API do Compuilder, explorador.'
    });
})


module.exports = routes;