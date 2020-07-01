import Thunderstorm from '../../../img/animation-ready/thunderstorms.svg';
import drizzle from '../../../img/animation-ready/drizzle.svg';
import rain from '../../../img/animation-ready/rain.svg';
import snow from '../../../img/animation-ready/snow.svg';
import Atmosphere from '../../../img/animation-ready/mist.svg';
import clear from '../../../img/animation-ready/clear-day.svg';
import Clouds from '../../../img/animation-ready/cloudy.svg';

const getIcon = (id) => {
  if (id >= 200 && id < 300) {
    return Thunderstorm;
  }
  if (id >= 300 && id < 400) {
    return drizzle;
  }
  if (id >= 500 && id < 600) {
    return rain;
  }
  if (id >= 600 && id < 700) {
    return snow;
  }
  if (id >= 700 && id < 800) {
    return Atmosphere;
  }
  if (id === 800) {
    return clear;
  }
  if (id >= 801 && id < 805) {
    return Clouds;
  }
  return snow;
};

export default getIcon;
