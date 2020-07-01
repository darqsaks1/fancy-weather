
export const getLinkToImage = async (season) => {
  const url = `https://api.unsplash.com/photos/random?query=${season}&client_id=g7_TmpC9r4mL8niB_ZI5kDZYEjjp8NBrvS7krfGwEFE`;
  const res = await fetch(url);
  const data = await res.json();
  return data.urls.regular;
};

export const getIpInfo = async () => {
  const url = 'https://ipinfo.io/json?token=3b01bb68b0665b';
  const res = await fetch(url);
  const data = await res.json();
  return data.loc;
};

export const getGeo = async (coordinates, lang) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates}&language=${lang}&key=31b2a85804ec4b77bd795b2c7f3aa1a4`;
  const res = await fetch(url);
  const data = await res.json();
  const {
    city, country, county,
  } = data.results[0].components;
  if (!county && !city) {
    return `${data.results[0].formatted}`;
  }
  if (!city) {
    return `${county}, ${country}`;
  }
  return `${city}, ${country}`;
};

export const geoInput = async (coordinates, lang) => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${coordinates}&language=${lang}&key=31b2a85804ec4b77bd795b2c7f3aa1a4`;
  const res = await fetch(url);
  const data = await res.json();
  return `${data.results[0].geometry.lat},${data.results[0].geometry.lng}`;
};

export const getCurrentWeather = async (lat, lon, lang) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&
    exclude=hourly,minutely&appid=b5c4971ba0572cd00feaed50dab68581&lang=${lang}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
