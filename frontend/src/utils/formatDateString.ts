export const formatDateString = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return formatter.format(date);
};
