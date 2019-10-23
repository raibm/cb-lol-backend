const { Model, DataTypes } = require('sequelize');

class Campeao extends Model {
    static init(conexao){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize: conexao
        });
    }

    static associate(models){
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao_top', as: 'campeao_top' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao_jg', as: 'campeao_jg' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao_mid', as: 'campeao_mid' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao_adc', as: 'campeao_adc' });
        this.belongsToMany(models.Composicao, { foreignKey: 'id_campeao_sup', as: 'campeao_sup' });
    }
}

module.exports = Campeao;