const request = require('supertest');
const app = require('../app');

describe('GET /ajax-data', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .get('/ajax-data')
      .set('Accept', 'application/json');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    const body = res.body;
    const lines = body.lines;
    expect(lines).toBeDefined();
    expect(lines.length).toEqual(2);
    lines.forEach((line) => {
      expect(line.product).toBeDefined();
      expect(line.quantity).toBeDefined();
      expect(line.unitPrice).toBeDefined();
      expect(line.total).toBeDefined();
    });
    expect(body.subtotal).toBeDefined();
    expect(body.totalTax).toBeDefined();
    expect(body.total).toBeDefined();
  });
});
