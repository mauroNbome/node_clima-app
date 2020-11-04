const axios = require("axios");
const clima = require("./../clima/clima");

const getLugarLatLng = async (direccion) => {
  const encodedUrl = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=a00413fee6ef23352e4133a326b37309`,
  });
  const resp = await instance.get();

  if (resp.data.coord.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const city = resp.data.name;
  const country = resp.data.sys.country;
  const lon = resp.data.coord.lon;
  const lat = resp.data.coord.lat;

  return clima.getClima(lat, lon, city, country);
};

module.exports = {
  getLugarLatLng,
};
