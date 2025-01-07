const express = require('express');
const MoneyService = require('../services/money.service')
const validatorHandler = require('../middlewares/validator.handler')
const createMoneySchema = require('../schemas/money.schema')

const router = express. Router();
const service = new MoneyService();

router.get('/incomes', async (req, res) => {
  const incomes = await service.getIncomes();
  res.status(200).json(incomes);
})

router.get('/expenses', async (req, res) => {
  const expenses = await service.getExpenses();
  res.status(200).json(expenses);
});

router.get('/summary', async (req,res)=> {
  const summary = await service.summary();
  res.status(200).json(summary)
})

router.post('/incomes', validatorHandler(createMoneySchema),
  async(req, res)=> {
    const body = req.body;
    const newIncome = await service.createIncome(body)
    res.status(201).json(newIncome);
})

router.post(
  '/expenses',
  validatorHandler(createMoneySchema),
  async (req, res) => {
    const body = req.body;
    const newExpense = await service.createExpense(body);
    res.status(201).json(newExpense);
  },
);

module.exports = router;
