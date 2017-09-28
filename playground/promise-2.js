
const request = require("request");



var geocodeAddress = (add) => {
  debugger;
return new Promise ((resolve, reject)=>{
  var encodedAddress = encodeURIComponent(add);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
    if(error){
      reject(`unable to connect to google servers`)
    } else if (body.status === "ZERO_RESULTS") {
      reject(`Unable to find that address`);
    }else if (body.status === "OK")  {
      resolve({
        address:  body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    };
  });

});
}


console.log("hshsh")


geocodeAddress("add").then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}).catch((err) =>{
  console.log(err);
})
