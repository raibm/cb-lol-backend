'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('compositions', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      title: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING },
      id_owner: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      top_champion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'champions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      jg_champion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'champions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      mid_champion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'champions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      adc_champion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'champions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sup_champion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'champions', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false }
    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('compositions');
  }
};
