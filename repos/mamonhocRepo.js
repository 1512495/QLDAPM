var db = require('../fn/db');

exports.loadMaMonHoc = tenMon => {
  var sql = `select id from monhoc where TenMonHoc = ${tenMon}`;
  return db.load(sql);
}

