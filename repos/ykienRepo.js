var db = require('../fn/db');


exports.loadAll= () =>{
    var sql = `select * from ykiennguoidung`;
    return db.load(sql);
}

exports.delete = (id) => {
    var sql = `delete from ykiennguoidung where MaYKien= ${id}`;
    return db.save(sql);
}

