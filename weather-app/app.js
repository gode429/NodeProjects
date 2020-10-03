const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');


const address = process.argv[2];

if(!address){
    console.log('Please provide an address');
} else {
    geocode(address,(error,data) =>{
        if(error){
            return console.log('Error : ',error);
        }
        forecast(data.lattitude, data.longitude,(error,forecastData) =>{
            if(error){
                return console.log('Error : ',error);
            }
            console.log(data.location);
            console.log(forecastData);
        });
    });
}


