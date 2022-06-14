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

  afterAll(() => {
    pool.end();
  });
});
