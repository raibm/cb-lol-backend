const { Model, DataTypes } = require('sequelize');

class Composition extends Model {
    static init(connection){
        super.init({
            title: DataTypes.STRING,
            description: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_owner', as: 'user'});
        this.hasMany(models.Comment, { foreignKey: 'id_composition', as: 'comment'});
        this.hasOne(models.Composition, { foreignKey: 'id_champion', as: 'top_champion' });
        this.hasOne(models.Composition, { foreignKey: 'id_champion', as: 'jg_champion' });
        this.hasOne(models.Composition, { foreignKey: 'id_champion', as: 'mid_champion' });
        this.hasOne(models.Composition, { foreignKey: 'id_champion', as: 'adc_champion' });
        this.hasOne(models.Composition, { foreignKey: 'id_champion', as: 'sup_champion' });
    }

}

module.exports = Composition;