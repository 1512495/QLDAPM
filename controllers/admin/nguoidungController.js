var express = require("express"),
    nguoidungRepo = require("../../repos/nguoidungRepo");

var router = express.Router();

router.get("/", (req, res) => {
    nguoidungRepo.loadAll().then(rows => {
        var vm = {
            nguoidungs: rows
        };
        res.render("admin/nguoidung/index", { layout: "admin", vm });
    });
});


router.get("/add", (req, res) => {
    var vm = {
        showResult: false
    };
    res.render("admin/nguoidung/create", { layout: "admin", vm });
});

router.post("/add", (req, res) => {
    nguoidungRepo.add(req.body).then(value => {
        var vm = {
            showResult: true
        };
        res.render("admin/nguoidung/create", { layout: "admin", vm });
    });
});

router.get("/delete", (req, res) => {
    nguoidungRepo.delete(req.query.id).then(value => {
        res.redirect("/admin/nguoidung");
    });
});

router.get("/update", (req, res) => {
    nguoidungRepo.single(req.query.id).then(rows => {
        var vm = {
            nguoidung: rows[0]
        };
        res.render("admin/nguoidung/update", { layout: "admin", vm });
    });
});

router.post("/update", (req, res) => {
    nguoidungRepo.update(req.body).then(value => {
        res.redirect("/admin/nguoidung");
    });
});

module.exports = router;