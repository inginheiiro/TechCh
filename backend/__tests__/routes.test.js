const request = require('supertest');
const server = require('../app.js');

// Before everything
beforeAll(async () => {
  console.log('Jest starting!');
});

// After everything
afterAll(() => {
  server.close();
  console.log('Jest out!');
});

// Hello world basic test
describe('basic route tests', () => {
  test('get home route  GET /', async () => {
    const response = await request(server).get('/');
    await expect(response.status).toEqual(200);
    return expect(response.text).toContain('I\'m Alive!')
  });
});

describe('Check Alphabet City Zone ', () => {
  test(`get ${process.env.BASE_URL}/zones`, async () => {
    const response = await request(server).get(`${process.env.BASE_URL}/zones`);
    expect(response.status).toEqual(200);
    const dt=JSON.parse(response.text);
    expect(dt.zones[3].Zone).toContain('Alphabet City');
  });
});
