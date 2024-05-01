import { Request, Response } from 'express';
import { getPullRequests } from '@/modules/github/controller';
import { HttpError, httpStatusCode } from '@/utils';

// Mock the Express request and response objects
const req = {} as Request;
const res = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
} as unknown as Response;
const nextFunction = jest.fn();

// Mock the console.error function
console.error = jest.fn();

// Test suite for getPullRequests controller
describe('getPullRequests controller', () => {
  // Test case: should fetch pull requests from GitHub API successfully
  it('fetch pull requests from GitHub API successfully', async () => {
    // Mock the getZodValidatedParams and getZodValidatedQuery methods
    req.getZodValidatedParams = jest.fn().mockReturnValue({ repo: 'developer-experience-team' });
    req.getZodValidatedQuery = jest.fn().mockReturnValue({ state: 'open' });

    // Mock the response object from the GitHub API
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue([
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
      ]),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    // Call the controller function
    await getPullRequests(req, res, nextFunction);

    // Assert that the response was sent with the correct data
    expect(res.json).toHaveBeenCalledWith([
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
    ]);
  });

  // Test case: should handle non-ok response from GitHub API
  it('should handle non-ok response from GitHub API', async () => {
    req.getZodValidatedParams = jest.fn().mockReturnValue({ repo: 'developer-experience-team' });
    req.getZodValidatedQuery = jest.fn().mockReturnValue({ state: 'open' });

    // Mock the non-ok response from the GitHub API
    const mockErrorResponse = {
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue({ message: 'Bad Request' }),
    };
    global.fetch = jest.fn().mockResolvedValue(mockErrorResponse);

    try {
      await getPullRequests(req, res, nextFunction);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect((error as HttpError).statusCode).toBe(httpStatusCode.BAD_REQUEST);
      expect((error as HttpError).message).toContain(
        'Failed to fetch GitHub issues from developer-experience-team',
      );
    }
  });

  // Test case: should handle when GitHub issues array is undefined
  it('should handle when GitHub issues array is undefined', async () => {
    req.getZodValidatedParams = jest.fn().mockReturnValue({ repo: 'developer-experience-team' });
    req.getZodValidatedQuery = jest.fn().mockReturnValue({ state: 'open' });

    // Mock the response object from the GitHub API with undefined issues
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(undefined),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    try {
      await getPullRequests(req, res, nextFunction);
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
      expect((error as HttpError).statusCode).toBe(httpStatusCode.NOT_FOUND);
      expect((error as HttpError).message).toContain(
        'No GitHub issues found for developer-experience-team',
      );
    }
  });
});
