
//named import
import {multiply, divide} from './one.js';
//import * as one from './one.js';


console.log("in two.js")


function compute(x, y){

    
    multiply(x, y);
    divide(x, y);
    console.log("in two.js compute")
}
//named export
export const version = 1.0
//default export
export default compute;

