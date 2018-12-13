var express = require("express"),
  baihocRepo = require("../../repos/baihocRepo");
var {QUESTIONS_PER_PAGE} = require('../../config/config');
var router = express.Router();

router.get("/", async (req, res) => {
    var totalPage = (await baihocRepo.countPage())[0].total/QUESTIONS_PER_PAGE;
    var total = [];
    var rows = await baihocRepo.loadTiepTheo(0);
    for(let i = 0; i < totalPage; i++){
        total.push(i + 1);
    }
    var vm = {
        baihoc: rows,
        page: total
    }
    res.render("client/danhsachbaihoc", vm);
});

router.get("/:page", async (req, res) => {
    let page = req.params.page;
    if(!page){
        page = 1;
    }
    var totalPage = (await baihocRepo.countPage())[0].total/QUESTIONS_PER_PAGE;
    var total = [];
    if(page < 1){
        page = 1;
    }
    if(page > totalPage){
        page = totalPage;
    }
    var rows = await baihocRepo.loadTiepTheo(page - 1);
    for(let i = 0; i < totalPage; i++){
        total.push(i + 1);
    }
    var vm = {
        baihoc: rows,
        page: total
    }
    res.render("client/danhsachbaihoc", vm);
});

router.get('/chitiet/:idBH', (req, res) => {
  
   var id = req.params.idBH;
   var p1=baihocRepo.loadBaiHoc(id);
   var p2=baihocRepo.loadTiepTheo(id);
  // console.log(p2)
   Promise.all([p1, p2]).then(([rows, rows2]) => {
        var vm = {
            baihoc: rows,
            baitieptheo: rows2
        }
         res.render('client/chitietbaihoc', vm);
     });




    // baihocRepo.loadBaiHoc(id).then(rows => {
    //   var vm = {
    //       baihoc: rows
    //   };
    //   res.render("client/chitietbaihoc", vm );
    // });
});



module.exports = router;