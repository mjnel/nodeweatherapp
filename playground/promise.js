







//one promise which takes in a function as an argument
var somePromise = new Promise((resolve, reject)=>{

})










// var asyncAdd = (a,b) =>{
//   return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//       if(typeof a === `number` && typeof b === `number`){
//         resolve (a+b);
//       }else {
//         reject (`Arguments must be numbers`);
//       };
//     }, 1500);
//   });
// };
//
//
// asyncAdd(5,`7`).then((res)=>{
//       console.log(`result`, res)
//       return asyncAdd(res,33)
//   }).then((res2)=>{
//       console.log(`new result is`, res2);
//   }).catch((err)=>{
//       console.log(err);
// })




//
// var somePromise = new Promise ((resolve, reject)=>{
//   setTimeout(()=>{
//    resolve(`hey  it worked!`)
//   reject(`error man`)
//   },2500)
// });
//
//
// // only called if promise is furfilled
// somePromise.then((message)=>{
//   console.log( `Success`, message)
// }, (errorMessage) => {
//   console.log(`error:`, errorMessage)
// })
