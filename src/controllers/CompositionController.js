const Composition = require('../models/Composition');
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const comp = { id_owner, title, description, top_champion, jg_champion, mid_champion, adc_champion, sup_champion } = req.body;
        
        const user = await User.findByPk(comp.id_owner);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        const composition = await Composition.create({ id_owner, title, description, top_champion, jg_champion, mid_champion, adc_champion, sup_champion});

        if (!composition) {
            return res.status(400).json({ error: 'Parece que tivemos um problema em salvar sua composição.' });
        }

        return res.json(composition);
    },

    async index(req, res) {
        const compositions = await Composition.findAll();
        return res.json(compositions);
    },

    async getAllCompositionsByUserId(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }

        const composicoes = await Composition.findAll({ where: { id_owner: user.id } });

        return res.json(composicoes);
    },

    async delete(req, res) {
        const { id } = req.params;
        const composition = await Composition.findByPk(id);

        if (!composition) {
            return res.status(400).json({ error: 'Composição não encontrada.' });
        }

        await composition.destroy();

        return res.json(composition);
    },

    async update(req, res){
        const { id } = req.params;
        const compToUpdateValues = req.body;
        const composition = await Composition.findByPk(id);

        if (!composition) {
            return res.status(400).json({ error: 'Composição não encontrada.' });
        }

        await composition.update({ id_owner:  compToUpdateValues.id_owner, title: compToUpdateValues.title, description: compToUpdateValues.description, top_champion: compToUpdateValues.top_champion, jg_champion: compToUpdateValues.jg_champion, mid_champion: compToUpdateValues.mid_champion, adc_champion: compToUpdateValues.adc_champion, sup_champion: compToUpdateValues.sup_champion });

        return res.json(composition);
    }
};