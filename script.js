
let x = 20;  //moved outside here

var doWork = function(){
  var x = 10;
  return x;
}
//the x that is defined inside of doWork is hiding or shadows the x that is
// defined outside of that fn
console.log(doWork());  //10
console.log(x);  //20