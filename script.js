var doWork = function (){
  return {
    fn : "srinivas",
    ln : "pv",
    twitter : "srini88"
  };
};

//console.log(doWork());  // Objectfn: "srinivas"ln: "pv"twitter: "srini88"__proto__: Object


let {fn:first, twitter:twitter} = doWork();
// above // fn property from the object returned from doWork() and assign that
// shit to 'first' property

// the below shit works
// take away , the first property is the one returned
// the second one after colon is any shit variable name, i used first which is not
// matching with fn, still that shit works

// you cannot swap fn and first like this, it gets an error
// let {first:fn}
// becuase first shit is not being returned by doWork() 

console.log(first,  twitter);  // srinivas srini88
