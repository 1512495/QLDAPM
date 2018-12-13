var express = require("express"),
  searchRepo = require("../../repos/searchRepo");
var {QUESTIONS_PER_PAGE} = require('../../config/config');
var router = express.Router();

router.post("/", (req, res) => {
    
    var Ten=req.body.searchTieuDe;
    searchRepo.TimKiemTheoTieuDe(Ten).then(rows => {
            var vm = {
                baihoc: rows,
                soluongBH: rows.length === 0
            };
            res.render('client/searchTieuDe',vm);
        });

});





module.exports = router;