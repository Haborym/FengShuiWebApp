var express = require("express");
var router = express.Router();

const { gameStarted } = require("../utils/server");

router.get("/", (req, res, next) => {
  console.log("1");
  res.render("admin", { title: "Feng Shui 2", script: "no-game" });
});

router.get("/admin", (req, res, next) => {
  console.log("2");
  res.render("admin", { title: "Feng Shui 2", script: "no-game" });
});

module.exports = router;
