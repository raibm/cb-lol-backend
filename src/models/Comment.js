const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
    static init(connection){
        super.init({
            description: DataTypes.STRING
        },{
            sequelize: connection
        });
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'id_owner', as: 'user'});
        this.belongsTo(models.Composition, { foreignKey: 'id_composition', as: 'composition'});
    }
}

module.exports = Comment;