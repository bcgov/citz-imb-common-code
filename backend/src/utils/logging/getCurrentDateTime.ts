export type GetCurrentDateTime = {
  formattedDateUTC: string; // year-month-day
  formattedTimeUTC: string; // hours:minutes:seconds
  formattedDatePacific: string; // year-month-day
  formattedTimePacific: string; // hours:minutes:seconds
  pacificTimeZone: 'PT' | 'PST';
};

export const getCurrentDateTime = (): GetCurrentDateTime => {
  const now = new Date();
  const utcYear = now.getUTCFullYear();
  const utcMonth = now.getUTCMonth(); // getUTCMonth() is zero-indexed
  const utcDate = now.getUTCDate();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  // Formatting UTC date and time
  const formattedDateUTC = `${utcYear}-${String(utcMonth + 1).padStart(2, '0')}-${String(utcDate).padStart(2, '0')}`;
  const formattedTimeUTC = `${String(utcHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')}`;

  // Calculate Pacific time considering the known offset of -8 hours for PST
  let pacificHours = utcHours - 8; // Standard Time offset for Pacific (PST)
  const isDST = now.getUTCMonth() > 2 && now.getUTCMonth() < 11; // Simplified DST check, usually from March to November

  // Adjust for Pacific Daylight Time (PDT), which is UTC-7
  if (isDST) {
    pacificHours += 1;
  }

  const pacificTimeZone = isDST ? 'PT' : 'PST';

  // Adjust date and month if the hour calculation underflows from midnight
  let pacificDate = utcDate;
  let pacificMonth = utcMonth;
  if (pacificHours < 0) {
    pacificHours += 24;
    pacificDate -= 1;
    if (pacificDate < 1) {
      pacificMonth -= 1;
      if (pacificMonth < 0) {
        pacificMonth = 11; // December of the previous year
      }
      pacificDate = new Date(utcYear, pacificMonth + 1, 0).getDate(); // Last day of the previous month
    }
  }

  const formattedDatePacific = `${utcYear}-${String(pacificMonth + 1).padStart(2, '0')}-${String(pacificDate).padStart(2, '0')}`;
  const formattedTimePacific = `${String(pacificHours).padStart(2, '0')}:${String(utcMinutes).padStart(2, '0')}:${String(utcSeconds).padStart(2, '0')}`;

  return {
    formattedDateUTC,
    formattedTimeUTC,
    formattedDatePacific,
    formattedTimePacific,
    pacificTimeZone,
  };
};
