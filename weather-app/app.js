const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address) {
    console.log('Please provide a location')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
        
            console.log(location)
            console.log(forecastData)
            
        })  
        
    })
    
}

// To grab the latitude, longitude and location from the data object (which is being passed as the function argument) we
// are using the Destructuring function Arguments pattern



  