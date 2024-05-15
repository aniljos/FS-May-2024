interface Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(value: number): void;
}

class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    //constructor declartions(multiple)
    constructor();
    constructor(name: string, speed: number);
    constructor(name: string, speed: number, gears:number)


    //constructor implementation(one)
    constructor(name?: string, speed?: number, gears?:number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(value: number): void {
       
        this.speed -= value;
    }
}

let car1 : Vehicle = new Car();
car1.name = "Audi"; car1.speed=120; car1.gears=6;
console.log("car1", car1);
car1.applyBrakes(30);
console.log("car1", car1);

let car2 = new Car("BMW", 200);
console.log("car2", car2);
let car3 = new Car("Tesla", 150, 6);
console.log("car3", car3);
