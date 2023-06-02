const { Videogame, Genre } = require('../../db.js');
const { Op } = require('sequelize');

console.log('por entrar a videoRouter');

const getAllVideogames = async (req, res) => {
  console.log('iniciando videogameRouter');
  try {
    const { name } = req.query;
    let videogames;
    if (name) {
      videogames = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: [
          {
            model: Genre,
            attributes: ['name'],
          },
        ],
      });
    } else {
      videogames = await Videogame.findAll({
        include: [
          {
            model: Genre,
            attributes: ['name'],
          },
        ],
      });
    }

    res.status(200).json(videogames);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = getAllVideogames;
