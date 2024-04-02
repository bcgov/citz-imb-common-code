import { CSSProperties } from 'react';

export type IssueCardProps = {
  title: string;
  issueNumber: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  avatarURL: string;
  author: string;
  authorURL: string;
  commentCount: number;
  likeCount: number;
  dislikeCount: number;
  laughCount: number;
  hoorayCount: number;
  confusedCount: number;
  heartCount: number;
  rocketCount: number;
  eyesCount: number;
  shaded?: boolean;
  firstIssue?: boolean;
  lastIssue?: boolean;
  additionalStyles?: CSSProperties;
};
