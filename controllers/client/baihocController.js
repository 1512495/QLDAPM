var express = require("express"),
  baihocRepo = require("../../repos/baihocRepo");

var router = express.Router();

router.get("/", (req, res) => {
  baihocRepo.loadAll().then(rows => {
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