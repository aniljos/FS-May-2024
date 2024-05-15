console.log("Hello Typescript");

var x; // infers to any
x = 10;
x = "hello";

var y = 10; // Type inference
//y = "20" // static type checking

var z: number; // Type annotation
z = 100;
//z = true; // static type checking

var user: {id: number, name: string, location?: string};
user = {id: 1, name: "Anil"};

var compute: (a: number, b: number)=> number;
compute = function(a:number, b: number):number{
    return a + b;
}

type NullableString = string | null;
type StringOrNumber = string | number;

var v1: NullableString;
v1 = "tst";
v1 = null;
//v1  = 100; compiler error





