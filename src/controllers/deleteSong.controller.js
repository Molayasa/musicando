const Song = require('../models/Song');

const deleteSong = async (req, res) => {
  try {
    const { songId } = req.params;
    const song = await Song.findByPk(songId);

    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }

    await song.destroy();

    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "There's a problem with the server. Try again later" });
  }
};

module.exports = { deleteSong };
