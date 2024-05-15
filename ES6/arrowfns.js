
let compute = (a, b) => {
    return a + b;
}
console.log("compute", compute(3, 5));


compute = (a, b) =>  a * b;
console.log("compute", compute(3, 5));

const sqaureIt = x => x * x; 

console.log("sqaureIt", sqaureIt(13));

const numbers = [7, 1, 6, 8, 12, 4, 10, 3];

const squares =  numbers
                    .filter(x => x % 2 === 0)
                    .map(x => x * x);
console.log("sqaures", squares);


