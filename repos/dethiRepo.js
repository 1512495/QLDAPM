var db = require('../fn/db');


exports.loadAll = () => {
    var sql = `select * from dethi`;
    return db.load(sql);
}

exports.load_MaDeThi = () => {
    var sql = `select MaDeThi from dethi`;
    return db.load(sql);
}

exports.single = id => {
    var sql = `select * from dethi where MaDeThi = ${id}`;
    return db.load(sql);
}

exports.add = (dethi) => {
    var sql = `insert into dethi(TenDeThi, ThoiGian, SoCau, SoDiemMotCau) values('${dethi.TenDeThi}','${dethi.ThoiGian}','${dethi.SoCau}', '${dethi.SoDiemMotCau}')`;
    return db.save(sql);
}

exports.delete = (id) => {
    var sql = `delete from dethi where MaDeThi= ${id}`;
    return db.save(sql)
}

exports.update = (dethi) => {
    var sql = `update dethi set TenDeThi = '${dethi.TenDeThi}', ThoiGian = '${dethi.ThoiGian}',
    SoCau='${dethi.SoCau}', SoDiemMotCau='${dethi.SoDiemMotCau}' where MaDeThi = '${dethi.MaDeThi}'`;
    return db.save(sql);
}
exports.load_Tiep = id=>{
    var sql = `select * from dethi where MaDeThi > ${id} * 4 limit 4`;
    return db.load(sql);
}
exports.countPage = () => {
    var sql = `select count(*) as total from dethi`;
    return db.load(sql);
}