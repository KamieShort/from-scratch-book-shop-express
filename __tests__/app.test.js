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
        id: 1,
        title: 'Hiking the Pacific Crest Trail',
        released: 2016,
      },
      {
        id: 2,
        title: 'The Joyful Vegan',
        released: 2019,
      },
      {
        id: 3,
        title: 'The Bullet Journal Method',
        released: 2018,
      },
      {
        id: 4,
        title: 'Like a Mother',
        released: 2020,
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
