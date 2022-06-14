const pool = require('../utils/pool');
const Author = require('./Author');

module.exports = class Book {
  id;
  title;
  released;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
    // row.authors.length > 0
    //   ? row.authors.map((author) => new Author(author))
    //   : [];
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, title, released FROM books;');
    return rows.map((row) => new Book(row));
  }

  static async getBookById(id) {
    const { rows } = await pool.query(
      `SELECT books.*, COALESCE(json_agg(to_jsonb(authors))
      FILTER (WHERE authors.id IS NOT NULL), '[]') 
      as authors from books
    LEFT JOIN authors on books.id = authors.book_id
    GROUP BY books.id`,
      [id]
    );

    return rows.map((row) => new Book(row));
  }
};
