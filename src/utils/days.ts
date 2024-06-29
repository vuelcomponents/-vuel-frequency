export const getDate = (
  dayOfYear: number,
  noLocale?: boolean,
): Date | string => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  startOfYear.setDate(startOfYear.getDate() + dayOfYear);
  return noLocale ? startOfYear : startOfYear.toLocaleDateString();
};

const ONE_DAY = 1000 * 60 * 60 * 24;
export const getDayOfYear = (date: Date): number => {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  return (diff / ONE_DAY) | 0; // Użycie bitowego OR jako szybkiego sposobu na zaokrąglenie w dół
};

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
