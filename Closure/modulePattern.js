
// 1. Wrappig function call (Outer enclosing function)
var foo = (function() {
  var o = { bar: "bar"};

  //2. Has closure capability to access internal state
  // access to inner functions
  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };

  return publicAPI;

})();

foo.bar();