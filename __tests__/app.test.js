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

  it('/authors should display list of authors', async () => {
    const res = await request(app).get('/authors');

    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Eli Boschetto',
        dob: '4-SEP-1989',
        pob: 'Portland, Oregon',
      },
      {
        id: '2',
        name: 'Collen Patrick-Goudreau',
        dob: '6-JUN-1977',
        pob: 'San Francisco, California',
      },
      {
        id: '3',
        name: 'Ryder Carrol',
        dob: '13-MAR-1978',
        pob: 'Portland, Maine',
      },
      {
        id: '4',
        name: 'Angela Garbes',
        dob: '24-JUL-1983',
        pob: 'Seattle, Washington',
      },
    ]);
  });

  afterAll(() => {
    pool.end();
  });
});
