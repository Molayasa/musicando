module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Songs', 'genre_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Genres',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Songs', 'genre_id');
  },
};
