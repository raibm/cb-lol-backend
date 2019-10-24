const { Model, DataTypes } = require('sequelize');

class Campeao extends Model {
    static init(conexao){
        super.init({
            nome: DataTypes.STRING
        },{
            sequelize: conexao
        });
    }
}

module.exports = Campeao;