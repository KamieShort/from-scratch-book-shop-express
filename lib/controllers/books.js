const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookDetail = await Book.getBookById(id);
      res.json(bookDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res) => {
    const bookList = await Book.getAll();
    res.json(bookList);
  });
