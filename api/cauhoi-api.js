const express = require('express');
const CauHoi = require('../models/Cau-Hoi');
var router = express.Router();

//return all cauhoi
router.get('/', async function(req, res) {
    var rows = await CauHoi.findAll();
    res.json(rows); 
});
// return cauhoi with id given in param
router.get('/cauhoi', async (req, res)=>{
    var {id} = req.query;
    var rows = await CauHoi.findOne({
        where:{
            'MaCauHoi': id 
        }
    });
    res.json(rows);
});
// return cauhoi with id given in param
router.get('/monhoc', async (req, res)=>{
    var {id} = req.query;
    var rows = await CauHoi.findAll({
        where:{
            'MaMonHoc': id 
        }
    });
    res.json(rows);
});
module.exports = router;