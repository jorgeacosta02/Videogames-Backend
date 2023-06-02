const { get } = require('../../app.js');
const { Videogame, Genre } = require('../../db.js');

const getVideogameById = async(req,res)=>{
    console.log('idVideogame funciona en videoRouter');
    try{
      const {idVideogame} = req.params;
      console.log('idVideogame.length en videorouter', idVideogame.length);
      console.log('idVideogame en videoRouter', idVideogame);
      const videogame = await Videogame.findByPk(idVideogame, {
        include: [
          {
            model: Genre,
            through: 'VideoGameGenre'
          }],
      });
      console.log(' videogame.dataValues en videoRouter',videogame);
      res.status(200).json(videogame);
    }catch(err){
        res.status(400).json({error: err.message});
    };
};

module.exports = getVideogameById;