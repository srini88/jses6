var doWork = function(flag){
  for (var i=0; i<10; ++i){
  }
  return i;
}

console.log(doWork());  //10 //we get 10 because i is hoisted, it is not only
//within the for which we wanted

var doWorkLet = function(flag){
  for (let i=0; i<10; ++i){
  }
  return i;
}

console.log(doWorkLet());  //error - this i is constrained within for and we get
//true block scoping