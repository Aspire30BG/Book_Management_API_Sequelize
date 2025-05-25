module.exports = (sequelize, DataTypes) => {

    //creating the book model/schema
    const bookModel = sequelize.define('Book', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'books'
    });

    return bookModel;
};