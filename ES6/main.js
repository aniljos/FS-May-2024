
import computeInTwo, {version} from "./two.js";

console.log("in main.js");


function compute(a, b){
    console.log("in main.js compute")
}

computeInTwo(2, 4);
compute(10, 15);