// varibale that will hold constant value (read only)
//has block level scoping
const MAX_SIZE = 10;

//MAX_SIZE = 20;

//console.log(MAX_SIZE); //Uncaught TypeError: Assignment to constant variable.
// semantics of true es6 const , ecma6 it is a syntax error


//const does have block semantics
var doWork = function(){
  var x = 12;
  var x = 10;  //this one wins and overrides
  return x;
}

console.log(doWork());  //10