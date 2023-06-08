const express = require('express');
const { json } = require('express');

// Routers
const songRouter = require('./routers/song.router');

const BASE_URL = '/api/songs';
const server = express();

// Pre-routes Middleware
server.use(json());

// Routes
server.use(BASE_URL, songRouter);

module.exports = server;
