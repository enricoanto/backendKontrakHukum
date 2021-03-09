'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie_Actor.belongsTo(models.Movie, {
        targetKey: 'id',
        foreignKey: 'MovieId'
      })
      Movie_Actor.belongsTo(models.Actor, {
        targetKey: 'id',
        foreignKey: 'ActorId'
      })
    }
  };
  Movie_Actor.init({
    MovieId: DataTypes.INTEGER,
    ActorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie_Actor',
  });
  return Movie_Actor;
};