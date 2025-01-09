'use strict';

const {SUMMARY_TABLE, SummarySchema} = require('../models/summary.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(SUMMARY_TABLE, SummarySchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(SUMMARY_TABLE);
  }
};
