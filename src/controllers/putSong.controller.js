const Song = require('../models/Song');

const putSong = async (req, res) => {
  try {
    const { songId } = req.params;

    const existingSong = await Song.findByPk(songId, {
      attributes: ['title', 'length', 'album_id', 'artist_id', 'genre_id'],
      raw: true,
    });

    if (!existingSong) {
      return res.status(404).json({ message: 'Song not found' });
    }

    const { title, length, album_id, artist_id, genre_id } = req.body;

    const updatedSong = {
      ...existingSong,
      ...req.body,
    };

    await Song.update(updatedSong, {
      where: { id: songId },
    });

    res
      .status(200)
      .json({ data: updatedSong, message: 'Song updated successfully' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "There's a problem with the server. Try again later" });
  }
};

module.exports = { putSong };
