const Sequelize = require("sequelize");
const db = require("../database");

const Results = db.define("result", {
  result: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Results;
