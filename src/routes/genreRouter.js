const express = require('express');
const cors = require('cors');
const getAllGenres = require('./genreControllers/genreGetAllController.js');
const postGenres = require('./genreControllers/genrePostController.js');

const genreRouter = express.Router();

genreRouter.get('/', cors(), getAllGenres);

genreRouter.post('/', cors(), postGenres);


module.exports = genreRouter;
