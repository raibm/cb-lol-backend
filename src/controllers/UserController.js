const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { login, password, email, avatar } = req.body;

        try {
            const user = await User.create({ login, password, email, avatar });
        } catch (error) {
            return res.status(400).json({ error: 'Ocorreu um problema no cadastro do usuário, por favor tente novamente mais tarde.' });
        }

        return res.json(user);
    },

    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    }
};