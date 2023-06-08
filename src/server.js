const express = require('express');
const { json } = require('express');

// Routers
const songRouter = require('./routers/song.router');

const BASE_URL = '/api/songs';
const PORT = process.env.PORT || 3000;
const app = express();

// Pre-routes Middleware
app.use(json());

// Routes
app.use(BASE_URL, songRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
