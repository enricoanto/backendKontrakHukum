'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Actor, {through: models.Movie_Actor})
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    release_year: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    tickets: DataTypes.INTEGER
  }, { hooks: {
    beforeCreate: (user) => {
      user.tickets = 50
    }
  },
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};