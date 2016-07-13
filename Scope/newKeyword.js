function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo(); // undefined undefined
// 1. create brand-new object
// 2*. object get linked with a new object
// 3. bound as the this keyword for the purposes of that function call
// 4. if that function doesn't otherwise return anything it will implicitly
//    insert: return this

console.log(baz.baz); // "baz"