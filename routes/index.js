var express = require('express');
var router = express.Router();

/* current hour */
const d = new Date();
let hour = d.getHours();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (hour >= 0 && hour <= 11) {
    cond = "Pagi";
  }
  else if (hour >= 12 && hour <= 15) {
    cond = "Siang";
  }
  else if (hour >= 16 && hour <= 18) {
    cond = "Sore";
  }
  else {
    cond = "Malam";
  }
  res.render("index", {cond});
});

// router.get("/onesoal", function(req, res, next) {
//   res.render("onesoal");
// })

module.exports = router;
