# Weather_App
A weather app built using NodeJS which fetches geolocation from Google API and the weather information from Dark Sky API.

![Bintray](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)

## Features :

1. Gives you the complete address of the location/zip code entered.
2. Provides you with the temperature and apparent temperature of the place.

## Running Locally :

Cloning and installing dependencies
```
  git clone https://github.com/AK-007/Weather_App
  cd Weather_App
  npm install
```
## Commands :

Now there are 2 implementations present for the task:

1. app.js - It uses callbacks and promises, makes use of geocode.js and weather.js to provide you the weather details.
Example:
```
  node app.js -a "Key West fl"
```

2. app-promise.js - It uses Axios library that has promises built-in, it does not require any other file.
Example:
```
  node app-promise.js -a "Key West fl"
```
