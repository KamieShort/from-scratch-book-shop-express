const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for books and authors', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/books should display list of books', async () => {
    const res = await request(app).get('/books');

    expect(res.body).toEqual([
      {
        id: '1',
        title: 'Hiking the Pacific Crest Trail',
        released: 2016,
      },
      {
        id: '2',
        title: 'The Joyful Vegan',
        released: 2019,
      },
      {
        id: '3',
        title: 'The Bullet Journal Method',
        released: 2018,
      },
      {
        id: '4',
        title: 'Like a Mother',
        released: 2020,
      },
    ]);
  });

  it('/books/:id should return book details with authors', async () => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({
      title: 'Hiking the Pacific Crest Trail',
      released: 2016,
      authors: [
        {
          id: 1,
          name: 'Eli Boschetto',
          dob: '4-SEP-1989',
          pob: 'Portland, Oregon',
        },
      ],
    });
  });

  it('POST /books should create a new books', async () => {
    const resp = await request(app).post('/books').send({
      title: 'Harry Potter and the Chamber of Secrets',
      released: 2009,
    });
    expect(resp.body.title).toBe('Harry Potter and the Chamber of Secrets');
    expect(resp.body.released).toBe(2009);
  });

  afterAll(() => {
    pool.end();
  });
});
