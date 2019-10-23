const { Model, DataTypes } = require('sequelize');

class Comentario extends Model {
    static init(conexao){
        super.init({
            comentario: DataTypes.STRING
        },{
            sequelize: conexao
        });
    }

    static associate(models){
        this.belongsTo(models.Usuario, { foreignKey: 'id_autor', as: 'usuario'});
        this.belongsTo(models.Composicao, { foreignKey: 'id_composicao', as: 'composicao'});
    }
}

module.exports = Comentario;