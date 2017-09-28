console.log("starting app");

setTimeout(()=> {
  console.log("inside of call back")
},2000);


// finshes

setTimeout(()=> {
  console.log("second")
},0)

console.log("finishing app");
