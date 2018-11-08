var db = require('../fn/db');
var config = require('../config/config');
exports.loadAll = () => {
    var sql = 'select * from nguoidung';
    return db.load(sql);
}
exports.detail = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from nguoidung where MaNguoiDung = ${id}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });

}
exports.loadAllPage = (offset) => {
    var sql = `select * from nguoidung limit ${config.QUESTIONS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
exports.countAll = () => {
    var sql = 'select count(*) as total from nguoidung';
    return db.save(sql);
}
exports.add = (user) => {
    var sql = `insert into nguoidung(TenNguoiDung, Email, MatKhau, SDT, GioiTinh) values('${user.TenNguoiDung}', '${user.Email}', '${user.MatKhau}', '${user.SDT}', '${user.GioiTinh}')`;
    return db.save(sql);
}
exports.delete = (id) => {
    var sql = `DELETE from nguoidung where MaNguoiDung= ${id}`;
    return db.save(sql)
}
// exports.loadSubject = () => {
//     var sql = 'select * from monhoc';
//     return db.load(sql);
// }
exports.update = (user) => {
    var sql = `update nguoidung set TenNguoiDung = '${user.TenNguoiDung}', Email='${user.Email}',
    MatKhau='${user.MatKhau}', SDT='${user.SDT}', GioiTinh='${user.GioiTinh}' where MaNguoiDung = ${user.MaNguoiDung}`;
    return db.save(sql);
}

exports.single = id => {
    var sql = `select * from nguoidung where MaNguoiDung = ${id}`;
    return db.load(sql);
}