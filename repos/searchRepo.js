var db = require('../fn/db');


exports.TimKiemTheoTieuDe = tieude => {
    var sql = `select * from baihoc where TieuDe like '%${tieude}%'`;
    return db.load(sql);
}

