module.exports = {
  async up(queryInterface, Sequelize) {
    const artistsData = [];
    const albumsData = [];
    const genresData = [];
    const songsData = [];

    for (let i = 1; i <= 20; i++) {
      if (i <= 10) {
        const artist = {
          first_name: `Artist ${i}`,
          last_name: `Tsitra ${i}`,
        };
        artistsData.push(artist);

        const album = {
          name: `Album ${i}`,
          length: i * 10,
        };
        albumsData.push(album);

        const genre = {
          name: `Genre ${i}`,
        };
        genresData.push(genre);
      }

      const song = {
        title: `Song ${i}`,
        length: i,
        artist_id: Math.floor(Math.random() * artistsData.length) + 1,
        album_id: Math.floor(Math.random() * albumsData.length) + 1,
        genre_id: Math.floor(Math.random() * genresData.length) + 1,
      };
      songsData.push(song);
    }

    // Seed Artists
    await queryInterface.bulkInsert('Artists', artistsData, {});

    // Seed Albums
    await queryInterface.bulkInsert('Albums', albumsData, {});

    // Seed Genres
    await queryInterface.bulkInsert('Genres', genresData, {});

    // Seed Songs
    await queryInterface.bulkInsert('Songs', songsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Songs', null, {});
    await queryInterface.bulkDelete('Genres', null, {});
    await queryInterface.bulkDelete('Albums', null, {});
    await queryInterface.bulkDelete('Artists', null, {});
  },
};
