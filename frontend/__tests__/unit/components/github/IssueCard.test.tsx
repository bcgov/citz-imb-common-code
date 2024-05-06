import { render, screen, fireEvent } from '@testing-library/react';
import { IssueCard } from '@/components/github/IssueCard';

const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen });

// Test suite for IssueCard component
describe('IssueCard component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: component renders
  it('renders correctly', () => {
    render(
      <IssueCard
        title="Test Issue"
        issueNumber={1}
        url="http://example.com"
        createdAt="2022-01-01T00:00:00Z"
        updatedAt="2022-01-01T00:00:00Z"
        avatarURL="http://example.com/avatar.png"
        author="Test Author"
        authorURL="http://example.com/author"
        commentCount={5}
        likeCount={3}
        dislikeCount={1}
        laughCount={2}
        hoorayCount={0}
        confusedCount={0}
        heartCount={1}
        rocketCount={0}
        eyesCount={0}
      />,
    );
    expect(screen.getByText('Test Issue')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument(); // Issue number
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument(); // Comments
  });

  // Test case: created at and updated at are different
  it('renders updated at text correctly', () => {
    render(
      <IssueCard
        title="Test Issue"
        issueNumber={1}
        url="http://example.com"
        createdAt="2022-01-01T00:00:00Z"
        updatedAt="2022-02-01T00:00:00Z"
        avatarURL="http://example.com/avatar.png"
        author="Test Author"
        authorURL="http://example.com/author"
        commentCount={5}
        likeCount={3}
        dislikeCount={1}
        laughCount={2}
        hoorayCount={0}
        confusedCount={0}
        heartCount={1}
        rocketCount={0}
        eyesCount={0}
      />,
    );
    expect(document.body.textContent).toContain('Last updated');
  });

  // Test case: link clicks work
  it('opens issue and author profile on button click', () => {
    render(
      <IssueCard
        title="Test Issue"
        issueNumber={1}
        url="http://example.com"
        createdAt="2022-01-01T00:00:00Z"
        updatedAt="2022-01-01T00:00:00Z"
        avatarURL="http://example.com/avatar.png"
        author="Test Author"
        authorURL="http://example.com/author"
        commentCount={5}
        likeCount={3}
        dislikeCount={1}
        laughCount={2}
        hoorayCount={0}
        confusedCount={0}
        heartCount={1}
        rocketCount={0}
        eyesCount={0}
      />,
    );

    fireEvent.click(screen.getByText('Test Issue'));
    fireEvent.click(screen.getByText('Test Author'));

    expect(mockOpen).toHaveBeenCalledWith('http://example.com', '_blank');
    expect(mockOpen).toHaveBeenCalledWith('http://example.com/author', '_blank');
  });
});
