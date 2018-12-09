var db = require('../fn/db');


exports.loadAll = () => {
    var sql = `select * from baihoc`;
    return db.load(sql);
}

exports.loadBaiHoc = idBaiHoc => {
    var sql = `select * from baihoc where id = ${idBaiHoc}`;
    return db.load(sql);
}


exports.loadTiepTheo = idBaiHoc => {
    var sql = `select * from baihoc limit 4 offset ${idBaiHoc}`;
    return db.load(sql);
}