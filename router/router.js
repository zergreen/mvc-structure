const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

router.get("/", function (req, res) {
  res.render("index", { title: "Home Page" });
});

module.exports = router;
