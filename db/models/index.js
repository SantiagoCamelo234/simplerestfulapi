const { Incomes, IncomeSchema } = require('./incomes.model')
const { Expenses, ExpenseSchema } = require('./expenses.model');
const {Summary, SummarySchema } = require('./summary.model')



function setupModels(sequelize){
  Incomes.init(IncomeSchema, Incomes.config(sequelize));
  Expenses.init(ExpenseSchema, Expenses.config(sequelize));
  Summary.init(SummarySchema, Summary.config(sequelize));
}

module.exports = {
  setupModels
}
