const Sequelize = require('sequelize');
const dbConfiguracao = require('../configs/database');

const Usuario = require('../models/Usuario');
const Campeao = require('../models/Campeao');
const Comentario = require('../models/Comentario');
const Composicao = require('../models/Composicao');

const conexao = new Sequelize(dbConfiguracao);

Usuario.init(conexao);
Campeao.init(conexao);
Comentario.init(conexao);
Composicao.init(conexao);

Usuario.associate(conexao.models);
Campeao.associate(conexao.models);
Comentario.associate(conexao.models);
Composicao.associate(conexao.models);

module.exports = conexao;