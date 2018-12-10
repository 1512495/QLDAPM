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
    let id = req.query.id;
    var p1 = cauhoiRepo.loadDeThi(id);
    var p2 = dethiRepo.load_Tiep(id);
    Promise.all([p1, p2]).then(([rows, rows2]) => {
        var vm = {
            cauhois: rows,
            baitieptheo: rows2
        }
        res.render('client/content', vm);
    });
});


module.exports = router;