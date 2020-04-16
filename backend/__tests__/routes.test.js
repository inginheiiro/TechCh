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
