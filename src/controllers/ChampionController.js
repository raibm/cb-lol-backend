const Champion = require('../models/Champion');

module.exports = {
    async store(req, res){
        const { title, description } = req.body;

        try {
            const champion = await Champion.create({ title, description});
            return res.json(champion);

        } catch (error) {
            return res.status(400).json({ error: 'Falha ao adicionar campeão, tente novamente.' });
        }

    },

    async index(req, res){
        const champions = await Champion.findAll();
        return res.json(champions);
    }
};