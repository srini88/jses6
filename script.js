
if (true){
  const x = 20;    //now const has block scoping
}
var doWork = function(){
  var x = 10;  //this x is within the function level scope
  return x;
}
//the x that is defined inside of doWork is hiding or shadows the x that is
// defined outside of that fn
console.log(doWork());  //10
console.log(x);  //x is not defined