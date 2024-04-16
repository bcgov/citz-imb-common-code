import { IssueCardProps } from './types';

// Default values for props of IssueCardProps.
export const PROP_DEFAULTS: Pick<IssueCardProps, 'shaded' | 'lastIssue' | 'firstIssue'> = {
  shaded: false,
  lastIssue: false,
  firstIssue: false,
};

// Reaction emojis.
export const REACTIONS = {
  LIKE: '👍',
  DISLIKE: '👎',
  LAUGH: '😄',
  HOORAY: '🎉',
  CONFUSED: '😕',
  HEART: '❤️',
  ROCKET: '🚀',
  EYES: '👀',
};
