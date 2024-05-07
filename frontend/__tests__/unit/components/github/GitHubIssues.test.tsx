import { render, screen, waitFor } from '@testing-library/react';
import { GitHubIssues } from '@/components/github/GitHubIssues';

// Mock fetch response
const mockResponse = {
  ok: true,
  json: jest.fn().mockResolvedValue([
    {
      title: 'Test Issue 1',
      number: 1,
      url: 'http://example.com/issue/1',
      created_at: '2022-01-01T00:00:00Z',
      updated_at: '2022-01-01T00:00:00Z',
      user: {
        avatar_url: 'http://example.com/avatar.png',
        login: 'testuser',
        url: 'http://example.com/user',
      },
      comments: 5,
      reactions: {
        '+1': 3,
        '-1': 1,
        laugh: 2,
        hooray: 0,
        confused: 0,
        heart: 1,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      title: 'Test Issue 2',
      number: 2,
      url: 'http://example.com/issue/2',
      created_at: '2022-01-02T00:00:00Z',
      updated_at: '2022-01-02T00:00:00Z',
      user: {
        avatar_url: 'http://example.com/avatar.png',
        login: 'testuser',
        url: 'http://example.com/user',
      },
      comments: 3,
      reactions: {
        '+1': 2,
        '-1': 0,
        laugh: 1,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ]),
};

// Mock spinner
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Spinner: () => <div data-testid="spinner" />,
  IssueCard: ({ title }: { title: string }) => <div>{title}</div>,
}));

// Test suite for GitHubIssues component
describe('GitHubIssues component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: renders spinner
  it('renders loading spinner while fetching issues', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    render(<GitHubIssues repo="example/repo" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  // Test case: renders issues
  it('renders list of issues when fetched successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    render(<GitHubIssues repo="example/repo" />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText('Test Issue 1')).toBeInTheDocument();
    expect(screen.getByText('Test Issue 2')).toBeInTheDocument();
  });

  it('renders message when no issues are returned', async () => {
    // Mock fetch function to return empty array
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue([]) });
    render(<GitHubIssues repo="example/repo" />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText('No open issues.')).toBeInTheDocument();
  });
});
