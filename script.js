
const x = 20;  //no issues with const as well
//this const x scope is different from the functional x scope
var doWork = function(){
  var x = 10;  //this x is within the function level scope
  return x;
}
//the x that is defined inside of doWork is hiding or shadows the x that is
// defined outside of that fn
console.log(doWork());  //10
console.log(x);  //20