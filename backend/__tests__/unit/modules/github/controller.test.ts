import { Request, Response } from 'express';
import { getIssues } from '@/modules/github/controller';

// Mock the Express request and response objects
const req = {} as Request;
const res = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
} as unknown as Response;
const nextFunction = jest.fn();

// Mock the console.error function
console.error = jest.fn();

// Test suite for getIssues controller
describe('getIssues controller', () => {
  // Test case: should fetch issues from GitHub API successfully
  it('fetch issues from GitHub API successfully', async () => {
    // Mock the getZodValidatedParams and getZodValidatedQuery methods
    req.getZodValidatedParams = jest.fn().mockReturnValue({ repo: 'developer-experience-team' });
    req.getZodValidatedQuery = jest.fn().mockReturnValue({ state: 'open' });

    // Mock the response object from the GitHub API
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue([
        {
          url: 'https://api.github.com/repos/bcgov/developer-experience-team/issues/1',
          number: 1,
          title: 'Example Issue',
          comments: 2,
          created_at: '2024-04-09T12:00:00Z',
          updated_at: '2024-04-09T13:00:00Z',
          reactions: { thumbs_up: 5, thumbs_down: 1 },
          user: {
            login: 'exampleuser',
            avatar_url: 'https://example.com/avatar.jpg',
            url: 'https://api.github.com/users/exampleuser',
          },
        },
      ]),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Call the controller function
    await getIssues(req, res, nextFunction);

    // Assert that the response was sent with the correct data
    expect(res.json).toHaveBeenCalledWith([
      {
        url: 'https://api.github.com/repos/bcgov/developer-experience-team/issues/1',
        number: 1,
        title: 'Example Issue',
        comments: 2,
        created_at: '2024-04-09T12:00:00Z',
        updated_at: '2024-04-09T13:00:00Z',
        reactions: { thumbs_up: 5, thumbs_down: 1 },
        user: {
          login: 'exampleuser',
          avatar_url: 'https://example.com/avatar.jpg',
          url: 'https://api.github.com/users/exampleuser',
        },
      },
    ]);
  });
});
