import request from 'supertest';
import express from 'express';
import router from '@/modules/github/router';
import { zodValidationMiddleware } from '@/utils';

const app = express();
app.use(zodValidationMiddleware);
app.use('/github', router);

// Test suite for integration of GitHub issues route
describe('Integration Test: GitHub Issues Route', () => {
  // Test case: GET /github/issues/:repo should return 200 and issues
  test('GET /github/issues/:repo returns 200 and issues', async () => {
    // Mock the response from the GitHub API
    const mockFetchResponse = [
      {
        html_url: 'https://github.com/bcgov/developer-experience-team/issues/1',
        number: 1,
        title: 'Example Issue',
        comments: 2,
        created_at: '2024-04-09T12:00:00Z',
        updated_at: '2024-04-09T13:00:00Z',
        reactions: { thumbs_up: 5, thumbs_down: 1 },
        user: {
          login: 'exampleuser',
          avatar_url: 'https://example.com/avatar.jpg',
          html_url: 'https://github.com/exampleuser',
        },
      },
    ];

    // Mock the fetch function
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(mockFetchResponse) });

    // Make a request to the route
    const response = await request(app)
      .get('/github/issues/developer-experience-team')
      .query({ state: 'open' });

    const mockResponse = [
      {
        url: 'https://github.com/bcgov/developer-experience-team/issues/1',
        number: 1,
        title: 'Example Issue',
        comments: 2,
        created_at: '2024-04-09T12:00:00Z',
        updated_at: '2024-04-09T13:00:00Z',
        reactions: { thumbs_up: 5, thumbs_down: 1 },
        user: {
          login: 'exampleuser',
          avatar_url: 'https://example.com/avatar.jpg',
          url: 'https://github.com/exampleuser',
        },
      },
    ];

    // Assert that the response was successful and contains the correct data
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});

// Test suite for integration of GitHub pull requests route
describe('Integration Test: GitHub Pull Requests Route', () => {
  // Test case: GET /github/pulls/:repo should return 200 and pull requests
  test('GET /github/pulls/:repo returns 200 and pull requests', async () => {
    // Mock the response from the GitHub API
    const mockFetchResponse = [
      {
        html_url: 'https://github.com/bcgov/developer-experience-team/pull/1',
        number: 1,
        pull_request: true,
        title: 'Example Pull Request',
        comments: 2,
        created_at: '2024-04-09T12:00:00Z',
        updated_at: '2024-04-09T13:00:00Z',
        reactions: { thumbs_up: 5, thumbs_down: 1 },
        user: {
          login: 'exampleuser',
          avatar_url: 'https://example.com/avatar.jpg',
          html_url: 'https://github.com/exampleuser',
        },
      },
    ];

    // Mock the fetch function
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue(mockFetchResponse) });

    // Make a request to the route
    const response = await request(app)
      .get('/github/pulls/developer-experience-team')
      .query({ state: 'open' });

    const mockResponse = [
      {
        url: 'https://github.com/bcgov/developer-experience-team/pull/1',
        number: 1,
        title: 'Example Pull Request',
        comments: 2,
        created_at: '2024-04-09T12:00:00Z',
        updated_at: '2024-04-09T13:00:00Z',
        reactions: { thumbs_up: 5, thumbs_down: 1 },
        user: {
          login: 'exampleuser',
          avatar_url: 'https://example.com/avatar.jpg',
          url: 'https://github.com/exampleuser',
        },
      },
    ];

    // Assert that the response was successful and contains the correct data
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});
