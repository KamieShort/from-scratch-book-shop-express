const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('test routes for books and authors', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should display list of authors', async () => {
    const res = await request(app).get('/authors');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Eli Boschetto',
      },
      {
        id: '2',
        name: 'Collen Patrick-Goudreau',
      },
      {
        id: '3',
        name: 'Ryder Carrol',
      },
      {
        id: '4',
        name: 'Angela Garbes',
      },
    ]);
  });

  it('/authors/:id should return author details with books', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.body).toEqual({
      name: 'Eli Boschetto',
      dob: '4-SEP-1989',
      pob: 'Portland, Oregon',
      books: [
        {
          id: 1,
          title: 'Hiking the Pacific Crest Trail',
          released: 2016,
        },
      ],
    });
  });

  it('POST /authors should create a new author', async () => {
    const resp = await request(app).post('/authors').send({
      name: 'J.K. Rowling',
      dob: '31-JUL-1965',
      pob: 'England',
    });
    expect(resp.body.name).toBe('J.K. Rowling');
    expect(resp.body.dob).toBe('31-JUL-1965');
    expect(resp.body.pob).toBe('England');
  });

  afterAll(() => {
    pool.end();
  });
});
