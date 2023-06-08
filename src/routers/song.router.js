const { Router } = require('express');
const { getSong, postSong, putSong, deleteSong } = require('../controllers');

const songRouter = Router();

// GET /api/songs
songRouter.get('/', getSong);

// POST /api/songs
songRouter.post('/', postSong);

// PUT /api/songs/:songId
songRouter.put('/:songId', putSong);

// DELETE /api/songs/:songId
songRouter.delete('/:songId', deleteSong);

module.exports = songRouter;
