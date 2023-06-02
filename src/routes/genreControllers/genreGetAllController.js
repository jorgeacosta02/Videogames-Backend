const { Genre } = require('../../db.js');


const getAllGenres = async (req, res) => {
    try {
      const genres = await Genre.findAll(
      );
      res.json(genres);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
};

module.exports = getAllGenres