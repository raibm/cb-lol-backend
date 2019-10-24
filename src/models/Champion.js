const { Model, DataTypes } = require('sequelize');

class Champion extends Model {
    static init(connection){
        super.init({
            name: DataTypes.STRING
        },{
            sequelize: connection
        });
    }
}

module.exports = Champion;