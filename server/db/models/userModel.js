const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM("user", "admin"),
    defaultValue: "user",
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
