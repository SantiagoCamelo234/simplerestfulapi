const boom = require('@hapi/boom')
const {faker} = require('@faker-js/faker')
const moment = require('moment')
class MoneyService {

  constructor(){
    this.incomes = []
    this.expenses = []
  }
  async createIncome(data) {

    const newIncome = {
      id: faker.string.uuid(),
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      ...data,
    };
    this.incomes.push(newIncome);
    return newIncome;
  }
  async getIncomes(){
    return this.incomes
  }
  async getExpenses(){
    return this.expenses
  }
  async createExpense(data){
    const newExpense = {
      id: faker.string.uuid(),
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      ...data,
    };
    this.expenses.push(newExpense);
    return newExpense;
  }

  async summary(){

    const totalIncomes = ()=> {
      let incomesSum = 0;
      for(const income of this.incomes){
        incomesSum += parseInt(income.amount)
      }
      return incomesSum
    }

    const totalExpenses = () => {
      let expenseSum = 0
      for(const expense of this.expenses){
        expenseSum+= parseInt(expense.amount)
      }
      return expenseSum
    }

    const balance = () => {
      const balance = totalIncomes() - totalExpenses()
      return balance
    }

    const newSummary = {
      incomes: totalIncomes(),
      expenses: totalExpenses(),
      balance: balance()
    }

    return newSummary
  }
}


module.exports = MoneyService;
