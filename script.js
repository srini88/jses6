// when we declare variables

//initialize variables by assigning values
//destuctring in python or ruby
//set of variables by
//tear apart and pattern matching complex data strutture like array or object


let x = 3;
let y = 2;
// right side is an array
// destructing an array on the right side, give the variables x and y the values from array

// not creating a new array on the left hand side , only dealing with variables
// right hand side is an array
// array built is with values y and x on rhs
[x,y] = [y,x];

console.log(x, y);  //2, 3 got swapped

let [a, b] = [9,10];  //right side an array
//first value put it in a , 2nd value in b
// i'm not building an object literal below
// {x,y}  // assignment statment to pick off specific properties of obj
console.log(a,b);