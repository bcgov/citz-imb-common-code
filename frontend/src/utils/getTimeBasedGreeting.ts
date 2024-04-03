// Function to generate greeting based on time of day.
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning'; // From 0:00 (midnight) to 11:59
  if (hour < 18) return 'Good afternoon'; // From 12:00 (noon) to 17:59 [5:59pm]
  return 'Good evening'; // From 18:00 [6:00pm] to 23:59 [11:59pm]
};
