var express = require("express"),
  cauhoiRepo = require('../../repos/cauhoiRepo'),
  dethiRepo = require("../../repos/dethiRepo");

var router = express.Router();

router.get("/", (req, res) => {
  dethiRepo.loadAll().then(rows => {
      var vm = {
          dethis: rows
      };
      res.render("client/danhsachdethi", vm );
    });
});

router.get("/chitiet", (req, res) => {
    cauhoiRepo.loadDeThi(req.query.id).then(rows => {
      var vm = {
          cauhois: rows
      };
      res.render("client/content", vm );
    });
});


module.exports = router;