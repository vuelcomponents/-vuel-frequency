export const getRandoms = () => {
  const events = [];
  const startDate = new Date(new Date().getFullYear(), 0, 1); // Początkowa data - 1 stycznia bieżącego roku
  const endDate = new Date(new Date().getFullYear(), 11, 31); // Końcowa data - 31 grudnia bieżącego roku
  for (let i = 0; i < 150; i++) {
    let randomDate;
    randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime()),
    );
    const random = Math.random();
    if (random < 0.4) {
      events.push(...Array.from({ length: 6 }, () => ({ date: randomDate })));
    } else if (random < 0.6) {
      events.push(...Array.from({ length: 12 }, () => ({ date: randomDate })));
    } else {
      events.push({ date: randomDate });
    }

    events.push({
      date: randomDate,
    });
  }

  return events;
};
