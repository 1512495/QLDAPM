const express = require('express');
const DeThi = require('../models/De-Thi');
var router = express.Router();

//return all dethi
router.get('/', async function(req, res) {
    var rows = await DeThi.findAll();
    res.json(rows); 
});

router.get('/dethi', async (req, res)=>{
    var {id} = req.query;
    var rows = await DeThi.findOne({
        where:{
            'MaDeThi': id 
        }
    });
    res.json(rows);
});
module.exports = router;  

