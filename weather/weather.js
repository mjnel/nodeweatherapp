const request = require(`request`);



const  tempconvert = (fahre) => {
var n = (fahre-32) * 0.5555555555555556
return Math.round(n)
}


var getWeather = (lat, long, callback) => request({
  url: `https://api.darksky.net/forecast/1806a5e0bde1918a1ed58c592021bf50/${lat},${long}`,
  json: true
}, (error, response, body) => {
    if(!error && response.statusCode == 200){
      callback(undefined, {
        temperature: tempconvert(body.currently.temperature),
        apparentTemperature: tempconvert(body.currently.apparentTemperature)
      })

    }else{
      callback(`unable to fetch weather`)
    }


  })







    module.exports ={
      getWeather
    }
