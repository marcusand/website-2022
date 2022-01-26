type Format = 'short' | 'long' | 'year';

export const getFormattedDate = (date: Date, format: Format): string => {
  const numberStringWithPrefix = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const dateFormats = {
    long: (date: Date) => {
      const dayString = numberStringWithPrefix(date.getDate());
      const monthString = numberStringWithPrefix(date.getMonth() + 1);
      const yearString = date.getFullYear();

      return `${dayString}.${monthString}.${yearString}`;
    },
    short: (date: Date) => {
      const monthString = numberStringWithPrefix(date.getMonth() + 1);
      const yearString = date.getFullYear();

      return `${monthString}/${yearString}`;
    },
    year: (date: Date) => {
      return `${date.getFullYear()}`;
    }
  };

  return dateFormats[format](date);
};
