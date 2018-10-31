const Sequelize = require('sequelize');
const config = require('../config/index.json');
const sequelize = new Sequelize(config.DB.database, config.DB.user, config.DB.password, {
    host: config.DB.host,
    dialect: config.DB.dialect,
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = sequelize