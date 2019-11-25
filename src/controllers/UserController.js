const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { login, password, email, avatar } = req.body;

        try {
            const user = await User.create({ login, password, email, avatar });
            return res.json(user);

        } catch (error) {
            return res.status(400).json({ error: 'Ocorreu um problema no cadastro do usuário, por favor tente novamente mais tarde.' });
        }
    },

    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },

    async delete(req, res){
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        const result = await User.destroy({ user });

        return res.json(result);
    }
};