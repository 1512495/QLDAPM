var express = require("express"),
  bailamRepo = require("../../repos/bailamRepo");

var router = express.Router();

router.get("/", (req, res) => {
  bailamRepo.loadAll().then(rows => {
    var vm = {
      bailams: rows
    };
    res.render("admin/bailam/index", { layout: "admin", vm });
  });
});

router.get("/add", (req, res) => {
  var vm = {
    showResult: false
  };
  res.render("admin/bailam/create", { layout: "admin", vm });
});

router.post("/add", (req, res) => {
  bailamRepo.add(req.body).then(value => {
    var vm = {
      showResult: true
    };
    res.render("admin/bailam/create", { layout: "admin", vm });
  });
});

router.get("/delete", (req, res) => {
  bailamRepo.delete(req.query.id).then(value => {
    res.redirect("/admin/bailam");
  });
});

router.get("/update", (req, res) => {
  bailamRepo.single(req.query.id).then(rows => {
    var vm = {
      bailam: rows[0]
    };
    res.render("admin/bailam/update", { layout: "admin", vm });
  });
});

router.post("/update", (req, res) => {
  bailamRepo.update(req.body).then(value => {
    res.redirect("/admin/bailam");
  });
});

module.exports = router;