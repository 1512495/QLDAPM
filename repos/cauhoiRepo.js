var db = require('../fn/db');
var config = require('../config/config');
exports.loadAll=()=>{
    var sql = 'select * from cauhoi';
    return db.load(sql);
}
exports.detail=(id)=>{
    return new Promise((resolve, reject) => {
        var sql = `select * from cauhoi where MaCauHoi = ${id}`;
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
    var sql = `select * from cauhoi limit ${config.QUESTIONS_PER_PAGE} offset ${offset}`;
    return db.load(sql);
}
exports.countAll=()=>{
    var sql = 'select count(*) as total from cauhoi';
    return db.save(sql);
}
exports.add = (question) => {
    var sql = `insert into cauhoi(NoiDung, HinhMinhHoa, MaMonHoc, SoLanThi, SoLanDung, NgayTao, DapAnDung) values('${question.NoiDung}', '${question.HinhMinhHoa}', '${question.MaMonHoc}', '${question.SoLanThi}', '${question.SoLanDung}', '${question.NgayTao}', '${question.DapAnDung}')`;
    return db.save(sql);
}
exports.delete = (id) => {
    var sql = `DELETE from cauhoi where MaCauHoi= ${id}`;
    return db.save(sql)
}
exports.loadSubject = ()=>{
    var sql = 'select * from monhoc';
    return db.load(sql);
}
exports.update = (question) => {
    var sql = `update cauhoi set NoiDung = '${question.NoiDung}', HinhMinhHoa='${question.HinhMinhHoa}',
    MaMonHoc='${question.MaMonHoc}', SoLanThi='${question.SoLanThi}', SoLanDung='${question.SoLanDung}',
    DapAnDung='${question.DapAnDung}' where MaCauHoi = ${question.MaCauHoi}`;
    return db.save(sql);
}