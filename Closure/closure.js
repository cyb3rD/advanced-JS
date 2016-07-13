function fnGlobalOne() {
  var bar = "varInLexicalScope";

  function fnInnerFunc() {
    console.log(bar);
  }

  fnGlobalTwo(fnInnerFunc);
}

function fnGlobalTwo(argument) {
  // access var in existing lexical scope of argument passed function
  argument();     // "varInLexicalScope"
}

fnGlobalOne();

for (var i=1; i<=5; i++) {
  // Each IIFE has it's own scope for each interation
  (function(i) {
    setTimeout(function() {
      console.log("i: " + i);
    }, i*1000);
  })(i);
}