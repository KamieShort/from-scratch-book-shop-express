const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const bookDetail = await Book.getById(id);
    res.json(bookDetail);
  })

  .get('/', async (req, res) => {
    const bookList = await Book.getAll();
    res.json(bookList);
  });
