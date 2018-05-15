var yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for.',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address).then((results) => {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) => {
        if(errorMessage){
            console.log(errorMessage);
        }else{
            console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemp}.`);
        }
    });
}, (errorMessage) => {
    console.log(errorMessage);
});
