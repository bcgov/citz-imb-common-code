import { render, screen, waitFor } from '@testing-library/react';
import { GitHubPulls } from '@/components/github';

// Mock fetch response
const mockResponse = {
  ok: true,
  json: jest.fn().mockResolvedValue([
    {
      title: 'Test Pull 1',
      number: 1,
      url: 'http://example.com/pull/1',
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
      title: 'Test Pull 2',
      number: 2,
      url: 'http://example.com/pull/2',
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

// Test suite for GitHubPulls component
describe('GitHubPulls component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: renders spinner
  it('renders loading spinner while fetching pull requests', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    render(<GitHubPulls repo="example/repo" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  // Test case: renders pull requests
  it('renders list of pull requests when fetched successfully', async () => {
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    render(<GitHubPulls repo="example/repo" />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText('Test Pull 1')).toBeInTheDocument();
    expect(screen.getByText('Test Pull 2')).toBeInTheDocument();
  });

  it('renders message when no pull requests are returned', async () => {
    // Mock fetch function to return empty array
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: jest.fn().mockResolvedValue([]) });
    render(<GitHubPulls repo="example/repo" />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(screen.getByText('No open pull requests.')).toBeInTheDocument();
  });
});
