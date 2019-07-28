const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/1d42572e9b7f33edfe1ca54192001ae4/'+latitude+','+longitude+'?units=si&lang=es';
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Problemas for connecting to Forecast API', undefined);
        } else if (body.error) {
            callback('Unable to find that location', undefined);
        } else {
            const {currently: {temperature, precipProbability}} = body;
            const summary = body.daily.data[0].summary;
            const minTemp = body.daily.data[0].temperatureMin;
            const maxTemp = body.daily.data[0].temperatureMax;
            const message = summary + ' Actualmente hay ' + temperature + 'ºC afuera, la temperatura mínima será de ' + minTemp + 'ºC y la temperatura máxima será de ' + maxTemp + 'ºC. Existe un ' + precipProbability*100 + '% de probabilidad de lluvia.';
            //console.log(message);
            callback(undefined, message)
        }
    });
}

module.exports = forecast;