var db = require('../fn/db');


exports.loadAll = () => {
    var sql = `select * from cauhoi`;
    return db.load(sql);
}

exports.single = id => {
    var sql = `select * from cauhoi where MaCauHoi = ${id}`;
    return db.load(sql);
}

exports.loadDeThi = id => {
    var sql = `select * from cauhoi where MaDeThi = ${id}`;
    return db.load(sql);
}

exports.add = (question) => {
    var sql = `insert into cauhoi(MaDeThi, NoiDung, HinhMinhHoa, MaMonHoc, DapAnDung) values('${question.MaDeThi}','${question.NoiDung}', '${question.HinhMinhHoa}', '${question.MaMonHoc}', '${question.DapAnDung}')`;
    return db.save(sql);
}

exports.delete = (id) => {
    var sql = `delete from cauhoi where MaCauHoi= ${id}`;
    return db.save(sql)
}

exports.update = (question) => {
    var sql = `update cauhoi set MaDeThi = '${question.MaDeThi}',
    NoiDung='${question.NoiDung}', HinhMinhHoa='${question.HinhMinhHoa}', MaMonHoc='${question.MaMonHoc}',
    DapAnDung='${question.DapAnDung}' where MaCauHoi = ${question.MaCauHoi}`;
    return db.save(sql);
}