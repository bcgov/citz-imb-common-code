export const ENDPOINTS = {
  HEALTH: '/api/health',
  READY: '/api/health/ready',
  CONFIG: '/api/config',
  GITHUB_ISSUES: (repo: string, state: 'open' | 'closed' | 'all') =>
    `/api/github/issues/${repo}?state=${state}`,
  GITHUB_PULLS: (repo: string, state: 'open' | 'closed' | 'all') =>
    `/api/github/pulls/${repo}?state=${state}`,
};
