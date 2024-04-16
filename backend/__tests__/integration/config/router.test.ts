import request from 'supertest';
import express from 'express';
import router from '@/modules/config/router';

const app = express();
app.use('/config', router);

// Set environment variables for this test case
jest.mock('@/config/env', () => ({
  ENVIRONMENT: 'dev',
  DEBUG: true,
  VERBOSE_DEBUG: false,
}));

// Test suite for integration of config route
describe('Integration Test: Config Route', () => {
  // Test case: GET /config should return 200 and a config response
  test('GET /config returns 200 and a config response', async () => {
    const response = await request(app).get('/config');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      ENVIRONMENT: 'dev',
      DEBUG: true,
      VERBOSE_DEBUG: false,
    });
  });
});
