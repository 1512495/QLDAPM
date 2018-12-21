var express = require("express"),
  cauhoiRepo = require('../../repos/cauhoiRepo'),
  dethiRepo = require("../../repos/dethiRepo");

var router = express.Router();

router.get("/", async (req, res) => {
    let page = req.query.page;
    if(!parseInt(page)){
        page = 1;
    }
    var rows = await dethiRepo.load_Tiep(page - 1)
    var totalPage = await dethiRepo.countPage();
    var total = [];
    for(let i = 0; i < totalPage[0].total/4; i++){
        total.push(i + 1);
    }
    var vm = {
        dethis: rows,
        page: total
    }
    res.render("client/danhsachdethi", vm);
});

// router.get("/:", async (req, res) => {
//     let page = req.params.page;
//     if(!parseInt(page)){
//         page = 1;
//     }
//     var rows = await dethiRepo.load_Tiep(page - 1)
//     var totalPage = await dethiRepo.countPage();
//     var total = [];
//     for(let i = 0; i < totalPage[0].total/4; i++){
//         total.push(i + 1);
//     }
//     var vm = {
//         dethis: rows,
//         page: total
//     }
//     res.render("client/danhsachdethi", vm);
// });

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