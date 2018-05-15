var yargs = require('yargs');
var axios = require('axios');

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

var location = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}`;

axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Address not found');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/e88194dda369d942a3746746a126b96e/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`Its currently ${temperature}. It feels like ${apparentTemp}.`);
}).catch((error) => {
    if(error.code === 'ENOTFOUND'){
        console.log('Unable to connect to API Servers');
    }
    else{
        console.log(error.message);
    }
});
