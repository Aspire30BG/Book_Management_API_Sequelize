const {Sequelize, DataTypes} = require('sequelize')
const CONFIG = require('../config/db_config')

const bookModel = require('./book')

const sequelize = new Sequelize(
    CONFIG.DB_NAME,
    CONFIG.DB_USER,
    CONFIG.DB_PASSWORD,
    {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT
    }
);

sequelize.authenticate()
    .then(() =>{
        console.log('Connection Successful')
    }).catch((err) =>{
        console.log(err)
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

//Add Models
db.books = require('./book')(sequelize, DataTypes)


db.sequelize.sync({force: false})
    .then(() =>{
        console.log('Tables sync successful')
    }).catch((err) =>{
        console.log("Unable to sync database and tables", err)
    })

module.exports = db;