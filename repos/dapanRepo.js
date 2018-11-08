var db = require('../fn/db');


exports.loadAll = () => {
    var sql = `select * from dapan`;
    return db.load(sql);
}

exports.single = id => {
    var sql = `select * from dapan where MaDapAn = ${id}`;
    return db.load(sql);
}

exports.add = (dapan) => {
    var sql = `insert into dapan(MaCauHoi, A, B, C, D) values(${dapan.MaCauHoi},'${dapan.A}', '${dapan.B}', '${dapan.C}', '${dapan.D}')`;
    return db.save(sql);
}

exports.delete = (id) => {
    var sql = `delete from dapan where MaDapAn= ${id}`;
    return db.save(sql)
}

exports.update = (dapan) => {
    var sql = `update dapan set A = '${dapan.A}',
    B='${dapan.B}', C='${dapan.C}', D='${dapan.D}'
    where MaDapAn = ${dapan.MaDapAn}`;
    return db.save(sql);
}