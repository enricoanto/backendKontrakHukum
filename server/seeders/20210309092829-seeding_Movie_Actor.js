'use strict';
const fs = require('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let arr = fs.readFileSync('./data/Movie_actor.json', 'utf-8')
     arr = JSON.parse(arr)
        arr = arr.map(el=> {
          el.createdAt = new Date()
          el.updatedAt = new Date()
          return el
        })
      await queryInterface.bulkInsert('Movie_Actors', arr, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Movie_actors', null, {});
  }
};
