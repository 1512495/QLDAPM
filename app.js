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
    defaultLayout: 'admin',

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
    res.render('admin/nguoidung/index');
});

app.use('/admin/cauhoi', cauHoiController);
app.use('/admin/ykien', ykienController);
app.use('/admin/dethi', dethiController);
app.use('/admin/dapan', dapanController);
app.use('/admin/bailam', bailamController);
app.use('/admin/nguoidung', nguoidungController);

app.listen(3000, () => {
    console.log('server running on port 3000');
});