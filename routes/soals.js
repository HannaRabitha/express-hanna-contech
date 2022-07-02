var express = require("express");
var router = express.Router();
var dataSoal = require("../public/data/soals.json");

var scoreTrue = 0;
var scoreFalse = 0;
let len, idx;

/* GET soals listing. */
router.get("/", function (req, res, next) {
  len = dataSoal.length;
  idx = Math.floor(Math.random() * len);
  //  console.log(idx, "IDX SOALSSS");

  res.render("soal", {
    title: "Page Soal",
    dataSoal: dataSoal[idx],
    scoreTrue,
    scoreFalse,
  });
});

/* GET jawab-soal */
router.post("/jawab-soal", function (req, res, next) {
  const jawab = req.body.answerUser;
  // console.log(jawab);
  // console.log(idx, "IDX /JAWAB-SOAL");

  if (jawab === dataSoal[idx].answer) {
    scoreTrue++;
  } else {
    scoreFalse++;
  }
  res.redirect("/soals");
});

module.exports = router;
