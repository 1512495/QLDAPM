var db = require('../fn/db');


exports.loadAll = (idMon) => {
    var sql = `select * from baihoc where MaMonHoc = ${idMon}`;
    return db.load(sql);
}

exports.loadTiepTheo = idMon => {
    var sql = `select * from baihoc where id > ${idMon} * 4 limit 4 and MaMonHoc = ${idMon}`;
    return db.load(sql);
}

exports.countPage = (idMon) => {
    var sql = `select count(*) as total from baihoc where MaMonHoc = ${idMon}`;
    return db.load(sql);
}