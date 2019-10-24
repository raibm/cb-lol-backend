const Composition = require('../models/Composition');

module.exports = {
    async store(req, res){
        const { title, description } = req.body;

        try {
            const composition = await Composition.create({ title, description});
            return res.json(composition);
            
        } catch (error) {
            return res.status(400).json({ error: 'Parece que tivemos um problema em salvar sua composição. :(' });
        }
    },

    async index(req, res){
        const compositions = await Composition.findAll();
        return res.json(compositions);
    }
};