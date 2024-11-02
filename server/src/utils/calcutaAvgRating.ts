import { Rating } from '@prisma/client';

export const calculateAvgRating = (ratings: Rating[]): number => {
  const sum = ratings.reduce((acc, { userRating }) => acc + userRating, 0);
  const avg = sum / ratings.length;
  return +avg.toFixed(2);
};
