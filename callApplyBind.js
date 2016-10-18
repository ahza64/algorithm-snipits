// call() apply() bind()

"use strict";

//remember functions are objects!

//**call()**//

//use call() to lock down context on the spot
function jeanBotAttack() {
  console.log(this);
}

//first parameter is context
jeanBotAttack.call(1);
jeanBotAttack.call("blueberries");

//can also pass additional parameters (any amount):
function stuff(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}

//first argument is context, the rest
//are arguments of your choice
stuff.call(12, 1, 2, 3);

//**apply()**//

//use apply() when you have a varying number of arguments
function sum() {
  var total = 0;
  for(var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

var things = [1,3,4,66,7,19];

//first argument is context
var x = sum.apply(null,things);
console.log(x);

//apply is very similar to call(), except for the type of arguments it supports.
//You can use an arguments array instead of a named set of parameters.

//**bind()**//

//use bind for function expressions
//used for locking context at time of
//function definition
var a = function() {
  console.log(this);
}.bind("taco");

//always taco
a();

var llama = {
  func: a
}

//still taco
llama.func();
