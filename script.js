var doWork = function (){
  return {
    fn : "srinivas",
    ln : "pv",
    twitter : "srini88"
  };
};

//console.log(doWork());  // Objectfn: "srinivas"ln: "pv"twitter: "srini88"__proto__: Object

let {fn:fn, ln:ln, twitter:twitter} = doWork();

// above is not building an obj literal
// why object declaration then ?
// assigning values that is returned from object thats why {} because right hand side
// is returning an object
console.log(fn, ln, twitter);  // srinivas pv srini88
// fn , ln and twitter are godammn variables