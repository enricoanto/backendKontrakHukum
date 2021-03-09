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

   let arr = fs.readFileSync('./data/Movies.json', 'utf-8')
   arr = JSON.parse(arr)
      arr = arr.map(el=> {
        el.tickets = 50
        el.createdAt = new Date()
        el.updatedAt = new Date()
        return el
      })
    await queryInterface.bulkInsert('Movies', arr, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
