var request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url : `https://api.darksky.net/forecast/e88194dda369d942a3746746a126b96e/${lat},${lng}`,
        json: true
    }, (error,response,body) => {
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather
}
