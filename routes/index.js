var express = require("express");
var router = express.Router();

// var counter = 0;

const user = {
  firstName: "Hanna",
  lastName: "Rabitha",
};

const posts = [
  {
    title: "Cara membuat donat kentang",
    body: "Donat kentang, kadang-kadang disebut Spudnut, adalah donat, biasanya manis, yang dibuat dengan kentang tumbuk atau tepung kentang bukan dari tepung terigu, bahan paling umum yang digunakan untuk adonan donat.",
  },
  {
    title: "Cara membuat American Pudding",
    body: "Puding adalah sebuah hidangan penutup yang umumnya dibuat dari bahan-bahan yang direbus, dikukus, atau dipanggang. Istilah puding juga dapat dipakai untuk berbagai jenis pai yang berisi campuran lemak hewan, daging, atau buah-buahan yang dipanggang, direbus, atau dikukus.",
  },
  {
    title: "Cara membuat Jelly",
    body: "Jelly adalah makanan yang secara tekstur terasa agak padat namun kenyal. Jelly terbuat dari olahan rumput laut yang diberi sari buah-buahan.",
  },
  {
    title: "Cara membuat Seblak",
    body: "Seblak adalah masakan khas Sunda yang dikenal berasal dari wilayah Parahyangan dengan cita rasa gurih dan pedas. Terbuat dari kerupuk basah yang dimasak dengan sayuran dan sumber protein seperti telur, ayam, boga bahari, atau olahan daging sapi, dan dimasak dengan kencur.",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Hi! its me Hanna",
    user,
    articles: posts,
  });
});

/* POST inc counter ++. */
router.post("/", function (req, res, next) {
  // counter += 1;
  res.redirect("/");
});

module.exports = router;
