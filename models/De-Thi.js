const sequelize = require('./db');
const Sequelize = require('sequelize');

const DeThi = sequelize.define('DeThi', {
    MaDeThi: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    MaCauHoi: Sequelize.INTEGER,
    NgayTao: Sequelize.DATE,
    SoCau: Sequelize.INTEGER,
    SoDiemMotCau: Sequelize.INTEGER,
    SoLanThi: Sequelize.INTEGER,
    ThoiGian: Sequelize.INTEGER
}, {
    tableName: 'dethi',
    timestamps: false,
});

module.exports = DeThi;