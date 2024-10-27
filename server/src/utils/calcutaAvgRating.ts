import { Rating } from '@prisma/client';

export const calculateAvgRating = (ratings: Rating[]) => {
  const sum = ratings.reduce((acc, { userRating }) => acc + userRating, 0);
  return sum / ratings.length;
};
