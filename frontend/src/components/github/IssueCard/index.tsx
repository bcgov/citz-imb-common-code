import { memo } from 'react';
import { IssueCardProps } from './types';
import { styleMapper } from './styleMapper';
import { useDynamicStyles } from 'hooks';
import { Stack, Typography } from 'components/common';
import { Button } from '@bcgov/design-system-react-components';
import { REACTIONS } from './constants';
import { formatTimeDifferenceString } from 'utils/formatTimeDifferenceString';

const IssueCardComponent = (props: IssueCardProps) => {
  const {
    title,
    issueNumber,
    url,
    createdAt,
    updatedAt,
    avatarURL,
    author,
    authorURL,
    commentCount,
    likeCount,
    dislikeCount,
    laughCount,
    hoorayCount,
    confusedCount,
    heartCount,
    rocketCount,
    eyesCount,
  } = props;

  const styles = useDynamicStyles(props, styleMapper);

  // Calculate time since.
  const created = formatTimeDifferenceString(createdAt);
  let lastUpdated;
  if (createdAt !== updatedAt) lastUpdated = formatTimeDifferenceString(updatedAt);

  // Display reactions.
  const reactions = [
    { type: REACTIONS.LIKE, count: likeCount },
    { type: REACTIONS.DISLIKE, count: dislikeCount },
    { type: REACTIONS.LAUGH, count: laughCount },
    { type: REACTIONS.HOORAY, count: hoorayCount },
    { type: REACTIONS.CONFUSED, count: confusedCount },
    { type: REACTIONS.HEART, count: heartCount },
    { type: REACTIONS.ROCKET, count: rocketCount },
    { type: REACTIONS.EYES, count: eyesCount },
  ];

  const reactionsString = reactions
    .filter((reaction) => reaction.count > 0)
    .map((reaction) => `${reaction.type}${reaction.count > 1 ? `x${reaction.count}` : ''}`)
    .join('');

  // On link click.
  const openIssueInNewTab = () => window.open(url, '_blank');
  const openIssueAuthorInNewTab = () => window.open(authorURL, '_blank');

  return (
    <div style={styles}>
      <Stack additionalStyles={{ justifyContent: 'space-between' }}>
        <Stack direction="column" gap="0">
          <Stack>
            <Button
              variant="link"
              style={{ padding: '0 0 0 15px' }}
              onPress={() => openIssueInNewTab()}
            >
              {title}
            </Button>
            <Typography bold size="small" margin="auto 0">
              {issueNumber}
            </Typography>
          </Stack>
          <Stack>
            <Typography size="small" margin="auto 0 auto 15px" display="flex">
              {lastUpdated !== undefined && (
                <>
                  Last updated&nbsp;<Typography bold>{lastUpdated}</Typography>&nbsp;ago.&nbsp;
                </>
              )}
              Opened&nbsp;
              <Typography bold>{created}</Typography>&nbsp;ago by
            </Typography>
            <img
              src={avatarURL}
              width="20px"
              height="20px"
              style={{ borderRadius: '50%', margin: 'auto 5px auto 5px' }}
            />
            <Button
              variant="link"
              size="small"
              style={{ padding: '0 0' }}
              onPress={() => openIssueAuthorInNewTab()}
            >
              {author}
            </Button>
          </Stack>
        </Stack>
        <Stack direction="column">
          <Typography size="small" margin="auto 15px auto 0" display="flex">
            Comments:&nbsp;<Typography bold>{commentCount}</Typography>
          </Typography>
          <Typography size="small" margin="auto 15px auto 0" align="right">
            {reactionsString}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

/**
 * Displays github issue details.
 * @param {IssueCardProps} props - Properties are shown below.
 * @property {string} title - Title of the issue.
 * @property {number} issueNumber - The number of the issue.
 * @property {string} url - The url to the issue.
 * @property {string} createdAt - The date and time when the issue was created.
 * @property {string} updatedAt - The date and time when the issue was last updated.
 * @property {string} avatarURL - The URL of the avatar of the issue author.
 * @property {string} author - The name of the issue author.
 * @property {string} authorURL - The url to the authors profile.
 * @property {number} commentCount - The number of comments on the issue.
 * @property {number} likeCount - The number of like reactions on the issue.
 * @property {number} dislikeCount - The number of dislike reactions on the issue.
 * @property {number} laughCount - The number of laugh reactions on the issue.
 * @property {number} hoorayCount - The number of hooray reactions on the issue.
 * @property {number} confusedCount - The number of confused reactions on the issue.
 * @property {number} heartCount - The number of heart reactions on the issue.
 * @property {number} rocketCount - The number of rocket reactions on the issue.
 * @property {number} eyesCount - The number of eyes reactions on the issue.
 * @property {boolean} [shaded] - Specifies whether the card should be shaded.
 * @property {boolean} [firstIssue] - Specifies whether this is the first issue.
 * @property {boolean} [lastIssue] - Specifies whether this is the last issue.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the card component.
 */
export const IssueCard = memo(IssueCardComponent);
