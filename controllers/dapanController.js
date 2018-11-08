var express = require("express"),
  dapanRepo = require("../repos/dapanRepo");

var router = express.Router();

router.get("/", (req, res) => {
  dapanRepo.loadAll().then(rows => {
    var vm = {
      dapans: rows
    };
    res.render("admin/dapan/index", { layout: "admin", vm });
  });
});


router.get("/add", (req, res) => {
  var vm = {
    showResult: false
  };
  res.render("admin/dapan/create", { layout: "admin", vm });
});

router.post("/add", (req, res) => {
  dapanRepo.add(req.body).then(value => {
    var vm = {
      showResult: true
    };
    res.render("admin/dapan/create", { layout: "admin", vm });
  });
});

router.get("/delete", (req, res) => {
  dapanRepo.delete(req.query.id).then(value => {
    res.redirect("/admin/dapan");
  });
});

router.get("/update", (req, res) => {
  dapanRepo.single(req.query.id).then(rows => {
    var vm = {
      dapan: rows[0]
    };
    res.render("admin/dapan/update", { layout: "admin", vm });
  });
});

router.post("/update", (req, res) => {
  dapanRepo.update(req.body).then(value => {
    res.redirect("/admin/dapan");
  });
});

module.exports = router;