var db = require('../fn/db');

exports.add = (lienhe) => {
  var sql = `insert into thongtinlienhe(Name, Email, Subject, Message)
  values('${lienhe.name}', '${lienhe.email}', '${lienhe.subject}', '${lienhe.message}')`;
  return db.save(sql);
}

exports.single = id => {
  var sql = `select * from thongtinlienhe where MaLienHe = ${id}`;
  return db.load(sql);
}