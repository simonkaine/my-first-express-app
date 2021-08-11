const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);

const data = require('../data.js');

it('gets the human endpoint', async () => {
    const response = await request.get('/human');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('tests for single ID', async () => {
    const response = await request.get('/human/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data[0]);
});