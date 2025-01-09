const { allow } = require('joi');
const { Model, DataTypes, Sequelize } = require('sequelize');
const { type, description } = require('../../schemas/money.schema');

const SUMMARY_TABLE = 'summaries';

const SummarySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  incomes: {
    allowNull: true,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  expenses: {
    allowNull: true,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  balance: {
    allowNull: true,
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
};

class Summary extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: SUMMARY_TABLE,
      modelName: 'Summaries',
      timestamps: false,
    };
  }
}

module.exports = {
  SUMMARY_TABLE,
  SummarySchema,
  Summary,
};
