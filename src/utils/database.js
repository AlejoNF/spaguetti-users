const {Sequelize} = require('sequelize');

const db = new Sequelize({
    dialect:'postgres',
    host:'localhost',
    port:5433,
    username:'postgres',
    password:'root123',
    database:'spaghetti-db'
})

module.exports = db

