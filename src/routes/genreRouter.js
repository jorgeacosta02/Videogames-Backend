const express = require('express');
const getAllGenres = require('./genreControllers/genreGetAllController.js');
const postGenres = require('./genreControllers/genrePostController.js');

const genreRouter = express.Router();

genreRouter.get('/', getAllGenres);

genreRouter.post('/', postGenres);


module.exports = genreRouter;
