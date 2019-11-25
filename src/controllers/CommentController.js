const Comment = require('../models/Comment');

module.exports = {
    async store(req, res) {
        const { description } = req.body;

        try {
            const comment = await Comment.create({ description });
            return res.json(comment);

        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'Ops! Não deu para salvar seu comentário... desculpe. :(' });
        }
    },

    async index(req, res) {
        const comments = await Comment.findAll();
        return res.json(comments);
    },

    async destroy(req, res) {
        const { id } = req.params;
        const comment = await Comment.findByPk(id);

        if (!comment) {
            return res.status(400).json({ error: 'Comentário não encontrado ' });
        }
        const result = await Comment.destroy({ comment });

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

        await Comment.update(comment , { where: { id } });

        return res.json(comment);
    }
};