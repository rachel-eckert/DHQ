const router = require("express").Router();
const questionModel = require("../db/models/questionModel");

router.get("/", async (req, res, next) => {
  try {
    const questions = await questionModel.findAll();
    res.json(questions);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
