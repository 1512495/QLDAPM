var express = require("express"),
  monhocRepo = require("../../repos/monhocRepo");
  mamonhocRepo = require('../../repos/mamonhocRepo');
var {QUESTIONS_PER_PAGE} = require('../../config/config');
var router = express.Router();

router.get("/:tenMon", async (req, res) => {
    let ten = req.params.tenMon;
    let id;
    switch(ten){
      case "viet":{
        id = "2";
        break;
      }
      case "anh":{
        id = "3";
        break;
      }
      default:{
        id = "1";
      }
    }
    var rows = await monhocRepo.loadAll(id);
    var vm = {
        baihoc: rows,
    }
    res.render("client/monhoc", vm);
});


module.exports = router;




