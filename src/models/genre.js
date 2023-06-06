const { DataTypes } = require('sequelize');
const path = require('path');


module.exports = (sequelize) => {
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps:false,
    },
    );
};

const basename = path.basename(__filename);