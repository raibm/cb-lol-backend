const express = require('express');

const rotas = express.Router();

rotas.get('/', (req, res) => {
    return res.json({
        message: 'Testando Compuilder'
    });
})

module.exports = rotas;