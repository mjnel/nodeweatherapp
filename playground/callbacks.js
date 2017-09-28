

// variable which happends beingd the scenes pass a call back to another function
//id - of the user
//callback - going to get passed a function

function getUser(id, callback) {

  var user = {
    id: id,
    name: "mark"
  };
  setTimeout(()=> {callback(user)},3000)

}



getUser(20, function(userObj){
console.log(userObj);
})
