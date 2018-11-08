var db = require('../fn/db');


exports.loadAll = () => {
    var sql = `select * from thongtinbailam`;
    return db.load(sql);
}

exports.single = id => {
    var sql = `select * from thongtinbailam where MaBaiLam = ${id}`;
    return db.load(sql);
}

exports.add = (bailam) => {
    var sql = `insert into thongtinbailam(MaDeThi, MaNguoiDung, SoCauLam, SoCauDung) values(${bailam.MaDeThi},'${bailam.MaNguoiDung}', '${bailam.SoCauLam}', '${bailam.SoCauDung}')`;
    return db.save(sql);
}

exports.delete = (id) => {
    var sql = `delete from thongtinbailam where MaBaiLam= ${id}`;
    return db.save(sql)
}

exports.update = (bailam) => {
    var sql = `update thongtinbailam set MaDeThi = '${bailam.MaDeThi}',
    MaNguoiDung='${bailam.MaNguoiDung}', SoCauLam='${bailam.SoCauLam}', SoCauDung='${bailam.SoCauDung}'
     where MaBaiLam = ${bailam.MaBaiLam}`;
    return db.save(sql);
}