//const axios = require('axios');
const clima = require('./weather/clima');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));


clima.getClima(9.9280694, -84.0907246)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));


 */





/* let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD2mB0uR_smpjCJuY0SYIo-STh4rk8RwyE`)
    .then(resp => {

        let location = resp.data.results[0];
        let coordendas = location.geometry.location;
        console.log('Direccion: ', location.formatted_address);
        console.log('lat: ', coordendas.lat);
        console.log('long: ', coordendas.lng);

        //console.log(JSON.stringify(resp.data, undefined, 2));
        //console.log(resp.data);
    })
    .catch(e => console.log('Error', e)); */