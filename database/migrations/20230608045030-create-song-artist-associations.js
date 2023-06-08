module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Songs', 'artist_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Artists',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Songs', 'artist_id');
  },
};
