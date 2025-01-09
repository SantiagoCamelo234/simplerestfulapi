const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');
const { type, description } = require('../../schemas/money.schema');

const EXPENSES_TABLE = 'expenses';

const ExpenseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },

  amount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Expenses extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXPENSES_TABLE,
      modelName: 'Expenses',
      timestamps: false,
    };
  }
}

module.exports = {
  EXPENSES_TABLE,
  ExpenseSchema,
  Expenses
};
