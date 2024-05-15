console.log("Hello Typescript");
var x; // infers to any
x = 10;
x = "hello";
var y = 10; // Type inference
//y = "20" // static type checking
var z; // Type annotation
z = 100;
//z = true; // static type checking
var user;
user = { id: 1, name: "Anil" };
var compute;
compute = function (a, b) {
    return a + b;
};
var v1;
v1 = "tst";
v1 = null;
//v1  = 100; compiler error
