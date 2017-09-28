
const yargs = require("yargs");
const axios = require("axios");




const argv = yargs
.options({
 a: {
   demand: false,
   alias: "address",
   describe: "address to fetch weather for",
   string: true
 }
})
.help()
.default({a:"90210"})
.alias('help', 'h ')
.argv;





var encodedAdd = encodeURIComponent(argv.address);
var geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`;


axios.get(geoCodeURL).then((response) =>{
    if (response.data.status === "ZERO_RESULTS"){
      throw new Error ("unable to find that address");
  } else {
 
var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;
var weatherUrl = `https://api.darksky.net/forecast/1806a5e0bde1918a1ed58c592021bf50/${lat},${lng}`;
console.log(response.data.results[0].formatted_address);
return axios.get(weatherUrl)
  }
    
}).then((response) => {
var temp = response.data.currently.temperature;
var apparentTemperature= response.data.currently.apparentTemperature
console.log(`its currently ${temp}. It feels like ${apparentTemperature}`);

}).catch((e)=>{
  debugger;
if(e.code === "ETIMEDOUT"){
  console.log("servers down");
}else{

  console.log(Error);
  console.log(e.message);
}

})
