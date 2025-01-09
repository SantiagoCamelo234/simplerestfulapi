const { allow } = require('joi')
const {Model, DataTypes, Sequelize } = require('sequelize')
const { type, description } = require('../../schemas/money.schema')

const INCOMES_TABLE = 'incomes'

const IncomeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW

  },

  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING
  },


}

class Incomes extends Model {
  static config(sequelize){
    return {
      sequelize,
      tableName: INCOMES_TABLE,
      modelName: 'Incomes',
      timestamps: false
    }
  }
}

module.exports = {
  INCOMES_TABLE,
  IncomeSchema,
  Incomes
}
