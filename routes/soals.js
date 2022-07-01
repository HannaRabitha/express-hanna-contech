var express = require("express");
var router = express.Router();

var scoreTrue = 0;
var scoreFalse = 0;

const dataSoal = {
  textSoal: "Mana frasa yang sepola dengan pohon rindang?",
  options: [
    ["ibu cerewet"],
    ["rumah kayu"],
    ["sanggup mengambil"],
    ["telah membuang"],
  ],
  answer: "ibu cerewet",
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  // console.log(dataSoal);
  res.render("soal", {
    title: "Page Soal",
    dataSoal,
    scoreTrue,
    scoreFalse,
  });
});

router.post("/jawab-soal", function (req, res, next) {
  const jawab = req.body.answerUser;
  console.log(jawab);

  if (jawab === dataSoal.answer) {
    scoreTrue++;
  } else {
    scoreFalse++;
  }
  res.redirect("/soals");
});

module.exports = router;
