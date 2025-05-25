const db = require('../models')

const bookModel = db.books

async function getAllBooks(req, res) {
    try {
        const books = await bookModel.findAll()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).send(error)
        console.log('An error occured!')
    }
}

async function addBook(req, res) {
    const bookInfo = req.body;
    try {
        const book = await bookModel.create(bookInfo)
        res.status(200).json({
            message: "Book added successfully",
            data: book
        })   
    } catch (error) {
        res.status(500).send(error)
        console.log('An error occured!')
    }
}

async function updateBookById(req, res) {
    const bookId = req.params.id
    const bookUpdateInfo = req.body

    try {
        const book = await bookModel.update(bookUpdateInfo, {
            where: {
                id: bookId
            }
        })
        res.status(200).json({
            message: "Book updated successfully",
            data: book
        })   
    } catch (error) {
        res.status(500).send(error)
        console.log('An error occured!')
    }
}

async function deleteBookById(req, res) {
    const bookId = req.params.id

    try {
        const book = await bookModel.destroy({
            where: {
                id: bookId
            }
        })
        res.status(200).json({
            message: "Book deleted successfully",
        })   
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}



module.exports = {
    getAllBooks,
    addBook,
    updateBookById,
    deleteBookById
};