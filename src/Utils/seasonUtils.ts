import type { Seasons, SeasonSummary } from '../Types/SeasonTypes';

const getSeasonByMonth = (monthIndex: number): Seasons => {
  if (monthIndex >= 2 && monthIndex <= 4) return 'Vår';
  if (monthIndex >= 5 && monthIndex <= 7) return 'Sommar';
  if (monthIndex >= 8 && monthIndex <= 9) return 'Höst';
  return 'Vinter';
};

export const getSeasonDetails = (): SeasonSummary => {
  const now = new Date();
  const monthIndex = now.getMonth();
  const seasonName = getSeasonByMonth(monthIndex);

  const descriptions: Record<Seasons, string> = {
    Vinter: 'November - Februari',
    Vår: 'Mars - Maj',
    Sommar: 'Juni - Augusti',
    Höst: 'September - Oktober',
    Alla: 'Hela året',
  };

  return {
    name: seasonName,
    months: descriptions[seasonName],
  };
};
