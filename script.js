//console.log("Srini");

var add = function (x, y){
  return x+y
}

//ES6 implementation
// let is also working
let add1 = (x,y) => x+y;
//console.log(add(4, 2));
//console.log(add1(5, 6));

//example with var
var doWork = function(flag){
  if (flag){
    var x = 4;
  }
  return x;
}

console.log(doWork(true));  //4 no surprise
console.log(doWork(false));  //undefined
//coz x has been hoisted to the top of the function since var has function
//level scope , we getting undefined instead of an error

