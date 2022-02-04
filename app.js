const geocode = require('./utils/geocode')

const forecast = require('./utils/forecast')


const address = process.argv[2]

if (!address) {

  console.log('Please provide an address');

} else {

  geocode(address, (error, data) => {

    if (data) {

      const location = data.location

      forecast(data.latitude, data.longititude, (error, data) => {

        if (data) {

          console.log('Weather at ' + location);

          console.log(`We are reading a ${data.description}.Temperature is ${data.temperature} degree celcius and humidity is ${data.humidity}`);

        } else {

          console.log('Error: ', error);

        }

      })

    } else {

      console.log("Error: ", error);

    }

  })

}


