'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('composicao', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      titulo: { type: Sequelize.STRING, allowNull: false },
      descricao: { type: Sequelize.STRING },
      id_autor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuario', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_campeao_top: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'campeao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_campeao_jg: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'campeao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_campeao_mid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'campeao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_campeao_adc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'campeao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_campeao_sup: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'campeao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('composicao');
  }
};
