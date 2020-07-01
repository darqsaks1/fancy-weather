export const convertToFahrenheit = (el) => el * 1.8 + 32;

export const deleteAllNumbers = (str) => {
  const time = str.replace(/[^A-Za-zА-Яа-яЁё]/g, '');
  if (time === 'd') {
    return 'day';
  }
  return 'night';
};
