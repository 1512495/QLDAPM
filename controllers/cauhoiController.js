var express = require('express');
var cauhoi = require('../repos/cauhoiRepo');
var config = require('../config/config')
var moment = require('moment');
var multer = require('multer')
var router = express.Router();
var storage = multer.diskStorage({//
    destination: function (req, file, cb) {
        cb(null, '.././QLDAPM/public/images/')
    },
    filename: function (req, file, cb) {
        //cb(null, Date.now() + '_' + file.originalname);
        //cb(null, file.originalname)
        cb(null, file.originalname);

        //   console.log(file.fieldname);
        //   console.log(file.originalname);
    }
});
const upload = multer({ storage: storage });
router.get('/', (req, res) => {

    var page = req.query.page;
    if (!page) {
        page = 1;
    }

    var offset = (page - 1) * config.QUESTIONS_PER_PAGE;

    var p1 = cauhoi.loadAllPage(offset);
    var p2 = cauhoi.countAll();
    Promise.all([p1, p2]).then(([pRows, countRows]) => {
        // console.log(pRows);
        // console.log(countRows);

        var total = countRows[0].total;
        var nPages = total / config.QUESTIONS_PER_PAGE;
        if (total % config.QUESTIONS_PER_PAGE > 0) {
            nPages++;
        }

        var numbers = [];
        for (i = 1; i <= nPages; i++) {
            numbers.push({
                value: i,
                isCurPage: i === +page
            });
        }
        for (let i = 0; i < pRows.length; i++) {
            pRows[i].NgayTao = moment(pRows[i].NgayTao).format("DD/MM/YYYY");
        }
        var firstPage = {};
        var lastPage = {};
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].isCurPage) {
                if (numbers[i].value === 1) {
                    firstPage = {
                        isFirstPage: true,
                        value: numbers[i].value
                    }
                    lastPage = {
                        isLastPage: false,
                        value: numbers[i].value + 1
                    }
                }
                else if (numbers[i].value === nPages) {
                    lastPage = {
                        isLastPage: true,
                        value: numbers[i].value
                    }
                    firstPage = {
                        isFirstPage: false,
                        value: numbers[i].value - 1
                    }
                }
                else {
                    lastPage = {
                        isLastPage: false,
                        value: numbers[i].value + 1
                    }
                    firstPage = {
                        isFirstPage: false,
                        value: numbers[i].value - 1
                    }
                }
            }
        }
        var vm = {
            pagination: nPages !== 1,
            questions: pRows,
            noProducts: pRows.length === 0,
            page_numbers: numbers,
            firstPage: firstPage,
            lastPage: lastPage,
        };
        // console.log(vm.questions)
        res.render('admin/cauhoi/index', vm);
    });
});

router.get('/create', (req, res) => {
    cauhoi.loadSubject().then(value => {
        var vm = {
            subject: value,
            showResult: false
        }
        res.render('admin/cauhoi/create', vm);
    })

})
router.get('/update/', (req, res) => {
    var id = req.query.id;
    cauhoi.detail(id).then(rows => {
        cauhoi.loadSubject().then(value => {
            var vm = {
                question: rows,
                showResult: false,
                subject: value
            }
            console.log(vm.question)
            res.render('admin/cauhoi/update', vm);
        })
    })

})
router.post('/update/', upload.single("HinhMinhHoa"), (req, res) => {
    var id = req.query.id;
    var hinh = '';
    if (req.file) {
        hinh = req.file.filename;
    }
    else {
        cauhoi.detail(id).then(value => {
            hinh = value.HinhMinhHoa;
        })
    }
    var questionInfor = {
        MaCauHoi: id,
        NoiDung: req.body.NoiDung,
        HinhMinhHoa: hinh,
        MaMonHoc: req.body.MaMonHoc,
        SoLanThi: req.body.SoLanThi,
        SoLanDung: req.body.SoLanDung,
        DapAnDung: req.body.DapAnDung
    }
    cauhoi.update(questionInfor).then(value => {
        cauhoi.detail(id).then(data => {
            var vm = {
                question: data,
                showResult: true,
            }
            res.render('admin/cauhoi/update', vm)
        })
    })
})

router.get('/delete/', (req, res) => {
    var id = req.query.id;
    id = parseInt(id, 10);

    // cauhoi.delete(id);
    // res.redirect('/admin/cauhoi/')
    cauhoi.delete(id).then(value => {
        res.redirect('/admin/cauhoi/')
    })

})
router.post('/create', upload.single("HinhMinhHoa"), (req, res) => {
    // console.log(req.body)

    var ngay = moment().format('YYYY-MM-DD')
    // req.body.HinhMinhHoa = req.file.originalname;
    var question = {
        NoiDung: req.body.NoiDung,
        HinhMinhHoa: req.file.filename,
        MaMonHoc: req.body.MaMonHoc,
        SoLanThi: req.body.SoLanThi,
        SoLanDung: req.body.SoLanDung,
        NgayTao: ngay,
        DapAnDung: req.body.DapAnDung
    }

    cauhoi.add(question).then(value => {
        cauhoi.loadSubject().then(value => {
            var vm = {
                subject: value,
                showResult: true
            }
            res.render('admin/cauhoi/create', vm);
        })
        // res.redirect('/admin/cauhoi/create')
    });

})
var Handlebars = require('handlebars')
Handlebars.registerHelper('select', function (selected, option) {
    return (selected == option) ? 'selected="selected"' : '';
});

module.exports = router;
