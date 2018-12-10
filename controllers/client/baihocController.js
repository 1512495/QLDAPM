var express = require("express"),
  baihocRepo = require("../../repos/baihocRepo");

var router = express.Router();

router.get("/", async (req, res) => {
    var rows = await baihocRepo.loadTiepTheo(0)
    var page = await baihocRepo.countPage();
    var vm = {
        baihoc: rows,
        page: page.total
    }
    res.render("client/danhsachbaihoc", vm);
});

router.get("/:page", (req, res) => {
    let page = req.params.page;
    baihocRepo.loadTiepTheo(page - 1).then(rows => {
        var vm = {
            baihoc: rows
        };
        res.render("client/danhsachbaihoc", vm );
    });
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