const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection){
        super.init({
            login: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            avatar: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }

    static associate(models){
        this.hasMany(models.Comment, { foreignKey: 'id_owner', as: 'comment'});
        this.hasMany(models.Composition, { foreignKey: 'id_owner', as: 'composition'});
    }
}

module.exports = User;