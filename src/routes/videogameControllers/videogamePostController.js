const { Videogame, Genre } = require('../../db.js')

const postVideogame = async (req, res) => {
    console.log('entrando a post')
    try {
      const {name,description,platforms,image,releaseDate,rating} = req.body;
      console.log('description en post',description);
      if(name.length <= 3){
        throw new Error ('El nombre debe tener más de 3 letras.')
      };
      if(rating > 5){
        throw new Error ('El rating no puede ser mayor a 5.')
      };
      const newVideogame = await Videogame.create(
        {
          name,
          description,
          platforms,
          image,
          releaseDate,
          rating
        }
      );
      const genreIds = req.body.genreIds;
      await Promise.all(
        genreIds.map(async genreId => {
          const genre = await Genre.findByPk(genreId);
          if (genre) {
            await newVideogame.addGenre(genre);
          }
        })
      );
    
      res.status(201).json(newVideogame);
    } catch (error) {
      console.error('error en videoRouter', error.message);
      res.status(400).json({ message: error.message });
    }
};

module.exports = postVideogame;