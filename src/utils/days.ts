export const getDate = (dayOfYear: number, noLocale?: boolean): Date | string => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    startOfYear.setDate(startOfYear.getDate() + dayOfYear);
    return noLocale ? startOfYear : startOfYear.toLocaleDateString();
}
export const getDayOfYear = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}