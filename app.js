var express = require('express');
var exphbs = require('express-handlebars');
var exphbs_section = require('express-handlebars-sections');
var path = require('path');
var dethi = require('./controllers/dethiController');
var cauhoi = require('./controllers/cauhoiController');

var homeController = require("./controllers/homeController");

var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'admin',
    layoutsDir: 'views/_layouts/',
    helpers: {
        section: exphbs_section()
    }
}));
app.set('view engine', 'hbs');
// API DeThi
app.use('/dethi', dethi);
// API CauHoi
app.use('/cauhoi', cauhoi);

app.use(express.static(
    path.resolve(__dirname, 'public')
));

app.get('/', (req, res) => {
    res.render('admin/nguoidung/index');
});

// app.use("/", homeController);

app.listen(3000, () => {
    console.log('server running on port 3000');
});