const Sequelize = require("sequelize");
const db = require("../database");

const Questions = db.define("result", {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Questions;
