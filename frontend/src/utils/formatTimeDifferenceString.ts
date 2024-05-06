/**
 * Calculates the time difference between the provided date and the current time.
 *
 * @example
 * const dateString = "2024-04-02T15:10:50Z";
 * const timeDifferenceString = formatTimeDifference(dateString);
 * console.log(timeDifferenceString); // Output example: "10 minutes"
 */
export const formatTimeDifferenceString = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'}`;

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'}`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? '' : 's'}`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays === 1 ? '' : 's'}`;
};
