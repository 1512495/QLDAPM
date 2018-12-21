module.exports = (req, res, next) => {
    if (req.session.isLogged === false) {
        res.redirect('/dangnhap?retUrl=' + req.originalUrl);
    } else {
        next();
    }
}