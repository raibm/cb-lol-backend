const { Model, DataTypes } = require('sequelize');

class Composition extends Model {
    static init(connection){
        super.init({
            id_owner: DataTypes.INTEGER,
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            top_champion: DataTypes.INTEGER,
            jg_champion: DataTypes.INTEGER,
            mid_champion: DataTypes.INTEGER,
            adc_champion: DataTypes.INTEGER,
            sup_champion: DataTypes.INTEGER
        }, {
            sequelize: connection
        });
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_owner', as: 'user'});
        this.hasMany(models.Comment, { foreignKey: 'id_composition', as: 'comment'});
    }

}

module.exports = Composition;