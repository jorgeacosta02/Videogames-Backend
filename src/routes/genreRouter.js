const express = require('express');
const getAllGenres = require('./genreControllers/genreGetAllController');
const postGenres = require('./genreControllers/genrePostController');

const genreRouter = express.Router();

genreRouter.get('/', getAllGenres);

genreRouter.post('/', postGenres);


module.exports = genreRouter;
