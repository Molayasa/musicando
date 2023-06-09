const Song = require('../models/Song');

const getSong = async (req, res) => {
  try {
    const songs = await Song.findAll({
      attributes: ['title', 'length'],
      include: [
        {
          association: 'album',
          attributes: ['name'],
        },
        {
          association: 'artist',
          attributes: ['first_name', 'last_name'],
        },
        {
          association: 'genre',
          attributes: ['name'],
        },
      ],
      raw: true,
      nest: true,
    });

    const response = songs.map(({ title, length, album, artist, genre }) => {
      return {
        title,
        length,
        album: album.name,
        artist: `${artist.first_name} ${artist.last_name}`,
        genre: genre.name,
      };
    });

    res.status(200).json({ data: response, message: 'Songs retrieved' });
  } catch (error) {
    console.error('There was a problem getting songs', error);
    res
      .status(500)
      .json({ message: "There's a problem with the server. Try again later" });
  }
};

module.exports = { getSong };
