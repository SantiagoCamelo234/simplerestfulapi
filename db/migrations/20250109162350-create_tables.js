'use strict';

 const {INCOMES_TABLE, IncomeSchema} = require('../models/incomes.model')
 const { EXPENSES_TABLE, ExpenseSchema } = require('../models/expenses.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(INCOMES_TABLE, IncomeSchema);
    await queryInterface.createTable(EXPENSES_TABLE, ExpenseSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(INCOMES_TABLE);
    await queryInterface.dropTable(EXPENSES_TABLE);

  }
};
