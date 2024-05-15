const names = ["Virat", "Rahul", "Dhoni"];


//const copy_of_names = [names[0], names[1], ....];
const copy_of_names = [...names];

console.log("names", names);
console.log("copy_of_names", copy_of_names);

names.push("Rohit");

console.log("names", names);
console.log("copy_of_names", copy_of_names);

const best_players = ["Sachin", "Saurav", "Laxman"];

const merged_players = [...names, ...best_players, "Rishab"];
console.log("merged_players", merged_players);

const iphone = {
    name: "IPhone",
    price: 85000
}

const copy_of_iphone = {...iphone}
console.log("copy_of_iphone", copy_of_iphone)

const modified_iphone = {...iphone, price: 75000};
console.log("modified_iphone", modified_iphone);

for(const index in names){
    console.log(index);
}

for(const key in iphone){
    //console.log(key, iphone[key]);

    console.log(`the key is ${key}  and the value is ${iphone[key]}`)
    
}

for(const name of names){
    console.log(name);
}

// for(const key of iphone){
//     console.log(key);
// }