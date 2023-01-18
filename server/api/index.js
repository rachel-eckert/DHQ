const router = require("express").Router();

router.use("", require(""));

router.use("", require(""));

router.use((req, res, next) => {
  const error = new Error("API not found");
  console.log("MY REQ HERE:", req);
  next(error);
});

module.exports = router;
