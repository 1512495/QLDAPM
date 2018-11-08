var express = require("express"),
  dethiRepo = require('../repos/dethiRepo'),
  cauhoiRepo = require("../repos/cauhoiRepo");

var router = express.Router();

router.get("/", (req, res) => {
  cauhoiRepo.loadAll().then(rows => {
    var vm = {
      cauhois: rows
    };
    res.render("admin/cauhoi/index", { layout: "admin", vm });
  });
});

router.get("/add", (req, res) => {
  dethiRepo.load_MaDeThi().then(rows => {
      var vm = {
        dethi_list: rows
        };
      res.render("admin/cauhoi/create", { layout: "admin", vm });
  });
});

router.post("/add", (req, res) => {
  cauhoiRepo.add(req.body).then(value => {
    var vm = {
      showResult: true
    };
    res.render("admin/cauhoi/create", { layout: "admin", vm });
  });
});

router.get("/delete", (req, res) => {
  cauhoiRepo.delete(req.query.id).then(value => {
    res.redirect("/admin/cauhoi");
  });
});

router.get("/update", (req, res) => {
  cauhoiRepo.single(req.query.id).then(rows => {
    var vm = {
      cauhoi: rows[0]
    };
    res.render("admin/cauhoi/update", { layout: "admin", vm });
  });
});

router.post("/update", (req, res) => {
  cauhoiRepo.update(req.body).then(value => {
    res.redirect("/admin/cauhoi");
  });
});

module.exports = router;