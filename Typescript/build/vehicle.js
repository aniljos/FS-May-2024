class Car {
    //constructor implementation(one)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(value) {
        this.speed -= value;
    }
}
let car1 = new Car();
car1.name = "Audi";
car1.speed = 120;
car1.gears = 6;
console.log("car1", car1);
car1.applyBrakes(30);
console.log("car1", car1);
let car2 = new Car("BMW", 200);
console.log("car2", car2);
let car3 = new Car("Tesla", 150, 6);
console.log("car3", car3);
