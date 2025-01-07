const Joi = require('joi')


const amount = Joi.number().integer().min(1);
const description = Joi.string().min(5).max(25);


const createMoneySchema = Joi.object({
    amount: amount.required(),
    description: description.required()
});

module.exports = createMoneySchema;
