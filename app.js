var express = require('express');
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var path = require('path');

var ykienController = require('./controllers/ykienController');
var cauHoiController = require('./controllers/cauhoiController');
var dethiController = require('./controllers/dethiController');
var dapanController = require('./controllers/dapanController');
var bailamController = require('./controllers/bailamController');
var nguoidungController = require('./controllers/nguoidungController');


var app = express();
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


app.get('/', (req, res) => {
    res.render('client/index');
});

//admin page
app.use('/admin/cauhoi', cauHoiController);
app.use('/admin/ykien', ykienController);
app.use('/admin/dethi', dethiController);
app.use('/admin/dapan', dapanController);
app.use('/admin/bailam', bailamController);
app.use('/admin/nguoidung', nguoidungController);


//client page
app.get('/baihoc', (req, res) => {
    res.render('client/danhsachbaihoc');
});

app.get('/dethi', (req, res) => {
    res.render('client/danhsachdethi');
});

app.get('/gioithieu', (req, res) => {
    res.render('client/gioithieu');
});

app.get('/lienhe', (req, res) => {
    res.render('client/lienhe');
});

app.get('/dangky', (req, res) => {
    res.render('client/signup');
});

app.get('/dangnhap', (req, res) => {
    res.render('client/login');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});