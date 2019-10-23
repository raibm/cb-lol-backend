const { Model, DataTypes } = require('sequelize');

class Composicao extends Model {
    static init(conexao){
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING
        }, {
            sequelize: conexao
        });
    }

    static associate(models){
        this.belongsTo(models.Usuario, { foreignKey: 'id_autor', as: 'usuario'});
        this.hasMany(models.Comentario, { foreignKey: 'id_composicao', as: 'comentario'});
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao', as: 'campeao_top' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao', as: 'campeao_jg' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao', as: 'campeao_mid' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao', as: 'campeao_adc' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao', as: 'campeao_sup' });
    }

}

module.exports = Composicao;