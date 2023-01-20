const Sequelize = require("sequelize");
const db = require("../database");

const userResultsModel = db.define("userResults", {
  questions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  results: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
});

module.exports = userResultsModel;
