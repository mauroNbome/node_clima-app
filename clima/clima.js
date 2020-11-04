const axios = require("axios");

const getClima = async (lat, lon, city, country) => {
  const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a00413fee6ef23352e4133a326b37309&units=metric`,
  });
  const resp = await instance.get();
  const temp = resp.data.main.temp;
  if (temp.length === 0) {
    throw new Error(`No se pudo determinar el clima de ${city}, ${country}`);
  }
  return `El clima en ${city}, ${country} es de ${temp}`;
};

module.exports = {
  getClima,
};
