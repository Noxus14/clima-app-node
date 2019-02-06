const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyD2mB0uR_smpjCJuY0SYIo-STh4rk8RwyE`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay Resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordendas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordendas.lat,
        lng: coordendas.lng
    }
}

module.exports = {
    getLugarLatLng
}