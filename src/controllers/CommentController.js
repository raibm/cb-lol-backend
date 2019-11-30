const Comment = require('../models/Comment');
const User = require('../models/User');
const Composition = require('../models/Composition');

module.exports = {
    async store(req, res) {
        
        console.log(req.body);

        const user = await User.findByPk(req.body.id_owner);

        if(!user){
            return res.status(400).json({ error: 'Usuario não encontrado.' });
        }
        
        const comp = await Composition.findByPk(req.body.id_composition);

        if(!comp){
            return res.status(400).json({ error: 'Composição não encontrada.' });
        }

        const comment = await Comment.create({ description: req.body.description, id_owner: req.body.id_owner, id_composition: req.body.id_composition });
        
        if(!comment){
            return res.status(400).json({ error: 'Falha ao criar seu comentário.' });
        }

        return res.json(comment);
    },

    async index(req, res) {
        const comments = await Comment.findAll();
        return res.json(comments);
    },

    async destroy(req, res) {
        const idComment= req.params.id;
        const comment = await Comment.findByPk(idComment);

        if (!comment) {
            return res.status(400).json({ error: 'Comentário não encontrado ' });
        }
        const result = await comment.destroy();

        return res.json(result);
    },

    async update(req, res) {

        const { description } = req.body;
        const { id } = req.params;

        const comment = await Comment.findByPk(id);

        if (!comment) {
            return res.status(400).json({ error: 'Comentário não encontrado ' });
        }

        comment.description = description;

        await comment.update({ description });

        return res.json(comment);
    },

    async findAllByCompositionId(req, res){

        const { id_composition } = req.params;

        const composition = await Composition.findByPk(id_composition);

        if(!composition){
            return res.status(400).json({ error: 'Composição não encontrada.' });
        }

        const comments = await Comment.findAll({where: { id_composition }}, {  include: [{
            model: User,
            as: 'user',
            attributes: 'avatar'
        }]});


        if(!comments){
            return res.status(400).json({ error: 'Esta composição não tem comentários.' });
        }

        return res.json(comments);
    }
};