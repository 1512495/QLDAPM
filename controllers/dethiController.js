var express = require("express"),
  dethiRepo = require("../repos/dethiRepo");

var router = express.Router();

router.get("/", (req, res) => {
  dethiRepo.loadAll().then(rows => {
    var vm = {
      dethis: rows
    };
    res.render("admin/dethi/index", { layout: "admin", vm });
  });
});

router.get("/add", (req, res) => {
  var vm = {
    showResult: false
  };
  res.render("admin/dethi/create", { layout: "admin", vm });
});

router.post("/add", (req, res) => {
  dethiRepo.add(req.body).then(value => {
    var vm = {
      showResult: true
    };
    res.redirect("/admin/dethi");
  });
});

router.get("/delete", (req, res) => {
  dethiRepo.delete(req.query.id).then(value => {
    res.redirect("/admin/dethi");
  });
});

router.get("/update", (req, res) => {
  dethiRepo.single(req.query.id).then(rows => {
    var vm = {
       dethi: rows[0]
    };
    res.render("admin/dethi/update", { layout: "admin", vm });
  });
});

router.post("/update", (req, res) => {
  dethiRepo.update(req.body).then(value => {
    res.redirect("/admin/dethi");
  });
});

module.exports = router;