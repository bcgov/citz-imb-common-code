import request from 'supertest';
import express from 'express';
import router from '@/modules/health/router';

const app = express();
app.use('/health', router);

// Test suite for integration of health route
describe('Integration Test: Health Route', () => {
  // Test case: GET /health should return 200 and a healthy response
  test('GET /health returns 200 and a healthy response', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Application is healthy!');
  });
});
