const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { login, password, email, avatar } = req.body;

        const userFound = await User.findOne({ where: { email } });

        if (userFound) {
            return res.status(400).json({ error: 'Usuário já existe' });
        }

        const user = await User.create({ login, password, email, avatar });

        if (!user) {
            return res.status(400).json({ error: 'Ocorreu um problema no cadastro do usuário, por favor tente novamente mais tarde.' });
        }

        return res.json(user);
    },

    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async delete(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        const result = await User.destroy({ where: { id: user.id } });
        //ou isso
        //user.destroy();

        return res.json(result);
    },

    async getUser(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        return res.json(user);
    },

    async getUserByLoginAndPassword(req, res) {

        const { login, password } = req.body;

        const user = await User.findOne({ where: { login, password } })

        if (!user) {
            return res.status(400).json({ error: 'Falha ao realizar o login, usuário não encontrado.' })
        }

        return res.json(user);
    }

};