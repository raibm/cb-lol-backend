const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(conexao){
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize: conexao
        });
    }

    static associate(models){
        this.hasMany(models.Comentario, { foreignKey: 'id_autor', as: 'comentario'});
        this.hasMany(models.Composicao, { foreignKey: 'id_autor', as: 'composicao'});
    }
}

module.exports = Usuario;