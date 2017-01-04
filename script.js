var doWork = function (){

  let a = 4;
  let b = 5;
  return [a,b];
}
  let [x,y] = doWork();  // destructuring in action
  console.log(x, y);  // 4 5 
