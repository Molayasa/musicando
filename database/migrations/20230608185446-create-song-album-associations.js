module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Songs', 'album_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Albums',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColum('Songs', 'album_id');
  },
};
