const lugar = require("./lugar/lugar");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Dirección de la cuidad para obtener el clima",
    demand: true,
  },
}).argv;

lugar.getLugarLatLng(argv.direccion).then(console.log).catch(console.log);
// clima.getClima(-64.64, -32.95).then(console.log).catch(console.log);

//SALIDA: El clima de XXX es de XXX
// ERR NO se pudo determinar el clima de XXX
