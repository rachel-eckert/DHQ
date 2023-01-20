const Sequelize = require("sequelize");
const db = require("../database");

const Result = db.define("result", {
  questionId: {
    type: Sequelize.INTEGER,
    references: {
      model: "questions",
      key: "id",
    },
  },
  recommendation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Result;
