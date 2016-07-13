var foo = "foo";

// IIFE
// Function Expression by wrapping with () and invoking
(function(){

  var foo = "new Foo";
  console.log(foo); // "new Foo"

})();

console.log(foo); // "foo"


function bar() {
  var foo = "baz";

  function baz(foo) { // here declaration of var foo in scope of function baz()
    // LHS
    foo = "bam";
    bam = "yay";
  }
  // RHS
  baz();
}

// RHS reference
bar();
// RHS
console.log(foo);    // "foo"
// RHS
console.log(bam);    // "yay"
// RHS
baz();  // Error! undefined