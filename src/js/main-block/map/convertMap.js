
const convertCrdsToMinute = (crds) => {
  const arrCrds = crds.toString().split('.');
  const min = `0.${arrCrds[1]}`;
  const minutes = Math.floor(min * 60);
  return `${arrCrds[0]} ° ${minutes}'`;
};

export default convertCrdsToMinute;
