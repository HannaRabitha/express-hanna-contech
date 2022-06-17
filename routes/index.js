var express = require("express");
var router = express.Router();

var counter = 0;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hi! its me Hanna", counter: counter });
});

/* POST inc counter ++. */
router.post("/", function (req, res, next) {
  counter += 1;
  res.redirect("/");
});

module.exports = router;
