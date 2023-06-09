const Song = require('../models/Song');

const postSong = async (req, res) => {
  const { title, length, artistId, albumId, genreId } = req.body;

  try {
    const song = await Song.create({
      title,
      length,
      artist_id: artistId,
      album_id: albumId,
      genre_id: genreId,
    });

    res.status(201).json({ data: song, message: 'Song created' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "There's a problem with the server. Try again later" });
  }
};

module.exports = { postSong };
