const express = require('express');
const cors = require('cors');
const getAllVideogames = require('./videogameControllers/videogameGetAllController');
const getVideogameById = require('./videogameControllers/videogameGetByIdController');
const postVideogame = require('./videogameControllers/videogamePostController');

const videoRouter = express.Router();

console.log('por entrar a videoRouter');

videoRouter.get('/', getAllVideogames);

videoRouter.get('/:idVideogame', cors(), getVideogameById);

videoRouter.post('/', cors(), postVideogame);

module.exports = videoRouter;
