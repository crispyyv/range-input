export const getPercentage = (current: number, min: number, max: number) =>
  ((current - min) / (max - min)) * 100;

export const getValue = (percentage: number, min: number, max: number) =>
  ((max - min) / 100) * percentage + min;

export const getMin = (percentage: number) => `calc(${percentage}% - 5px)`;
export const getMax = (percentage: number) => `calc(${percentage}%-5px)`;
export const getWidth = (percentage: number) => `${percentage}%`;
