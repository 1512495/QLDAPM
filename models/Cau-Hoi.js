const sequelize = require('./db');
const Sequelize = require('sequelize');

const CauHoi = sequelize.define('CauHoi', {
    MaCauHoi: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    DapAnDung: Sequelize.STRING,
    HinhMinhHoa: Sequelize.STRING,
    MaMonHoc: Sequelize.INTEGER,
    NgayTao: Sequelize.DATE,
    NoiDung: Sequelize.STRING,
    SoLanDung: Sequelize.INTEGER,
    SoLanThi: Sequelize.INTEGER
}, {
    tableName: 'cauhoi',
    timestamps: false,
});

module.exports = CauHoi;