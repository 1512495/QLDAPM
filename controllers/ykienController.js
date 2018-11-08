var express = require('express');
var ykienRepo = require('../repos/ykienRepo');
var config = require('../config/config')
var moment = require('moment');
var multer = require('multer')
var router = express.Router();



router.get('/', (req, res) => {
    ykienRepo.loadAll().then(rows => {
        var vm = {
            ykien: rows,
            koykien: rows.length === 0
        };
        
        res.render('admin/ykiennguoidung/index',  { layout: "admin", vm });
    });
    
});

router.get("/delete", (req, res) => {
  ykienRepo.delete(req.query.id).then(value => {
    res.redirect("/admin/ykien");
  });
});

module.exports = router;
