const router = require("express").Router();
const Question = require("../db/models/questionModel");

router.get("/", async (req, res, next) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
