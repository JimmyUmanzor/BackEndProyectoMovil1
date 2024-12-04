const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyectomovil1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
