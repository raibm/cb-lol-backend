const Sequelize = require('sequelize');
const dbConfig = require('../configs/database');

const User = require('../models/User');
const Champion = require('../models/Champion');
const Comment = require('../models/Comment');
const Composition = require('../models/Composition');

const connection = new Sequelize(dbConfig);

User.init(connection);
Champion.init(connection);
Comment.init(connection);
Composition.init(connection);

User.associate(connection.models);
Comment.associate(connection.models);
Composition.associate(connection.models);

module.exports = connection;