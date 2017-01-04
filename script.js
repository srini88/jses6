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
    let x = 4;  //x is only available to use inside the if block
  }
  return x;
}

console.log(doWork(true));  //4 no surprise
console.log(doWork(false));
//Uncaught ReferenceError: x is not defined
    // at doWork (script.js:18)
    // at script.js:21

//moving forward use the let keyword instead of var keyword to avoid this
//implicit variable hoisting