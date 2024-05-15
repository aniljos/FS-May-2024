
const product = {
    id: 1,
    name: "Lenovo",
    price: "120000",
    description: "Business Laptop"
}

const {id, name, ...otherProductProps} = product;

console.log("id", id);
console.log("name", name);
console.log("otherProductProps", otherProductProps);