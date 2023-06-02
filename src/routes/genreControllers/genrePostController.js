const { Genre } = require('../../db.js');
const axios = require('axios');
const { API_KEY } = process.env;


const postGenres = async (req, res) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
      const genresList = await response.data.results.map(genre => ({'id':genre.id, 'name':genre.name}));
      const count = await Genre.count();
      if (count === 0) {
        await Genre.bulkCreate(genresList);
        console.log('Se han cargado los géneros en la tabla');
      } else {
        console.log('La tabla genres no está vacía');
      }
  
      res.json(genresList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = postGenres;