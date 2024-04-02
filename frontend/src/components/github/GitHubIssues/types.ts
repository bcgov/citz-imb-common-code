export type GitHubIssue = {
  url: string;
  number: number;
  title: string;
  comments: number;
  created_at: string;
  updated_at: string;
  reactions: {
    url: string;
    total_count: number;
    '+1': number;
    '-1': number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  user: {
    login: string;
    avatar_url: string;
    url: string;
  };
};

export type GitHubIssuesProps = {
  repo: string;
};
