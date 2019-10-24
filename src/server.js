const express = require('express');
const rotas = require('./routes');
require('./databases');
const aplicacao = express();

aplicacao.use(express.json());
aplicacao.use(rotas);

aplicacao.listen(process.env.PORT || 3333);