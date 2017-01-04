var doWork = function (){
  return [1, 2, 3];
}
  let [x,y] = doWork();  // x takes value 1 and y 2, but we want x and y to take
  // 2 and 3
  console.log(x, y);  // 1 2
 // so do

 let [, a, b, z] = doWork();
 console.log(a, b, z);  // 2 3 undefined what we wanted  // z is undefined
