const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    first_name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    last_name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    birthday:{
        type:DataTypes.DATE,
        allowNull: true
    }
},{
    timestamps:false //? De momento no creo que utilicemos estos campos de created at updated at
})


module.exports = Users


