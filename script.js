var doWork = function (){
  return {
    fn : "srinivas",
    ln : "pv",
    twitter : "srini88"
  };
};

//console.log(doWork());  // Objectfn: "srinivas"ln: "pv"twitter: "srini88"__proto__: Object

let {a:fn, y:ln, z:twitter} = doWork();
//a, y, z, above not working
//console.log (a);  // not working says a is not defined //looks like you have
//to match the keys in the objects

//console.log(a, y, z); //fail error

