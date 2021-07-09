var express = require("express");
var router = express.Router();

const { gameStarted } = require("../utils/server");

/* GET home page. */
router.get("/", (req, res, next) => {
  if (gameStarted() !== -1) {
    res.render("index", { title: "Feng Shui 2", script: "client" });
  } else {
    res.redirect("/no-game");
  }
});

router.get("/no-game", (req, res, next) => {
  res.render("not-started", { title: "Feng Shui 2", script: "no-game" });
});

module.exports = router;
