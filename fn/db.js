var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
            password: '',
=======
            password: 'root',
>>>>>>> f3beb430cee72265741bdc2115411449d2442ceb
            database: 'luyenthilop6'
        });

        cn.connect((err)=>{
            if(err){
                throw err;
            }
            console.log("MySql Conected...");
        });

        cn.query(sql, function(error, rows, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
            password: '',
=======
            password: 'root',
>>>>>>> f3beb430cee72265741bdc2115411449d2442ceb
            database: 'luyenthilop6'
        });

        cn.connect((err)=>{
            if(err){
                throw err;
            }
            console.log("MySql Saved...");
        });

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}
