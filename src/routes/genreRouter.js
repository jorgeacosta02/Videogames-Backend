const express = require('express');
const getAllGenres = require('./genreControllers/genreGetAllController');
const postGenre = require('./genreControllers/genrePostController');

const genreRouter = express.Router();

genreRouter.get('/', getAllGenres);

genreRouter.post('/', postGenre);


module.exports = genreRouter;
