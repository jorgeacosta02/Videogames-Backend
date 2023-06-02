const { DataTypes } = require('sequelize');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        is: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/i,
      }
    },

    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
   
    releaseDate:{
      type: DataTypes.STRING,
      allowNull:false
    },
  
    rating:{
      type: DataTypes.FLOAT,
      allowNull:false
    },
  },
    {
      timestamps:false,
    }  
  );
};

const basename = path.basename(__filename);
console.log(basename);