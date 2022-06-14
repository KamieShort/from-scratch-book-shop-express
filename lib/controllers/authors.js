const { Router } = require('express');
const Author = require('../models/Author');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const authorDetail = await Author.getAuthorById(id);
      res.json(authorDetail);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res) => {
    const authorList = await Author.getAll();
    res.json(authorList);
  });
