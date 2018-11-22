var express = require("express"),
    lienheRepo = require("../../repos/lienheRepo");

var router = express.Router();

router.post("/add", (req, res) => {
  lienheRepo.add(req.body).then(value => {
      var vm = {
          showResult: true
      };
     res.redirect("/lienhe");
  });
});

module.exports = router;