const boom = require('@hapi/boom')
const {models} = require('../libs/sequelize')
class MoneyService {

  constructor(){
  }
  async createIncome(data) {
    const newIncome = await models.Incomes.create(data);
    return newIncome;
  }
  async getIncomes(){
    const incomes = await models.Incomes.findAll();
    return incomes
  }
  async getExpenses(){
    const expenses = await models.Expenses.findAll();
    return expenses
  }
  async createExpense(data){
    const newExpense = await models.Expenses.create(data);
    return newExpense;
  }

  async summary(){

    const totalIncomes = async ()=> {
      let incomesSum = 0;
      const incomes = await this.getIncomes()
      for(const income of incomes){
        incomesSum += parseInt(income.amount)
      }
      return incomesSum
    }

    const totalExpenses = async() => {
      const expenses = await this.getExpenses()
      let expenseSum = 0
      for(const expense of expenses){
        expenseSum+= parseInt(expense.amount)
      }
      return expenseSum
    }

    const balance = async () => {
      const balance = await totalIncomes() - await totalExpenses()
      return balance
    }

    const newSummary = {
      incomes: await totalIncomes(),
      expenses: await totalExpenses(),
      balance: await balance()
    }
    await models.Summaries.create(newSummary);

    return newSummary
  }
}


module.exports = MoneyService;
