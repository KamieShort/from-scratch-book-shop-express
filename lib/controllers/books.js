const { Router } = require('express');
const Books = require('../models/Book');

module.exports = Router().get('/', async (req, res) => {
  const bookList = await Books.getAll();
  res.json(bookList);
});
