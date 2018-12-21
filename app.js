var express = require('express');
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var path = require('path');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var handle404MDW = require('./middlewares/handle404'),
    handleLayoutMDW = require('./middlewares/handleLayout'),
    restrict = require('./middlewares/restrict'),
    restrictAdmin = require('./middlewares/restrictAdmin');


var accountController = require('./controllers/accountController');

//Admin controller
var ykienController = require('./controllers/admin/ykienController');
var cauHoiController = require('./controllers/admin/cauhoiController');
var dethiController = require('./controllers/admin/dethiController');
var dapanController = require('./controllers/admin/dapanController');
var bailamController = require('./controllers/admin/bailamController');
var nguoidungController = require('./controllers/admin/nguoidungController');


//Client controller
var dethiCtrlClient = require('./controllers/client/dethiController');
var lienheController = require('./controllers/client/lienheController');
var baihocCtrlClient = require('./controllers/client/baihocController');

var monhocCtrlClient = require('./controllers/client/monController');


var searchController = require('./controllers/client/searchController');

var nguoidungRepo = require('./repos/nguoidungRepo');


var app = express();
var sessionStore = new MySQLStore({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'luyenthilop6',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.engine('hbs', exphbs({
    defaultLayout: 'main',

    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section()
    }
}));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.use(handleLayoutMDW);
app.get('/', (req, res) => {
    res.render('client/index');
});

app.use('/account', accountController);
//admin page
app.use('/admin/cauhoi', cauHoiController);
app.use('/admin/ykien', ykienController);
app.use('/admin/dethi', dethiController);
app.use('/admin/dapan', dapanController);
app.use('/admin/bailam', bailamController);
app.use('/admin/nguoidung', nguoidungController);

//client page
// app.get('/baihoc', (req, res) => {
//     res.render('client/danhsachbaihoc');
// });
app.use('/baihoc', baihocCtrlClient);
app.use('/monhoc', monhocCtrlClient);
app.use('/dethi', dethiCtrlClient);
app.use('/lienhe', lienheController);
app.use('/search', searchController);

app.get('/gioithieu', (req, res) => {
    res.render('client/gioithieu');
});

app.get('/lienhe', (req, res) => {
    res.render('client/lienhe');
});

app.get('/dangky', (req, res) => {
    res.render('client/signup');
});
app.post('/dangky', (req, res) => {
    nguoidungRepo.add(req.body).then(value => {
        res.redirect("/dangnhap");
    });
});

app.get('/dangnhap', (req, res) => {
    res.render('client/login');
});

app.post('/dangnhap', (req, res) => {
    nguoidungRepo.dangNhap(req.body).then(rows => {
        if (rows.length > 0) {
            //console.log(req.session);
            //req.session.isLogged = true;
            req.session.curUser = rows[0];
            req.session.isLogged = true;
            //console.log(req.body.TenNguoiDung);
            //req.session.user = req.body.TenNguoiDung;
            //console.log(req.session);
            var url = '/';
            res.redirect(url);
        } else {
            var vm = {
                showError: true,
                errorMsg: "Login failed"
            };
            res.render("client/login", {
                data: vm,
                layout: false
            });
        }
    })
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});