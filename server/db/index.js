const db = require("./database");

const User = require("./models/userModel");
const Questions = require("./models/questionsModel");
const Results = require("./models/resultsModel");


Questions.hasOne(Results)
Results.belongsTo(Questions, { foreignKey: "questionId" });

module.exports = {
  db,
  models: {
    User,
    Questions,
    Results,
  },
};
