

// Class Interface

/*
interface ICar {
    move(speed: number): void;
    maxSpeed?: number;
}

class Car implements ICar {
    move(speed: number){
        console.log(`Move with speed ${speed}`);
    }

    stop(){
        console.log('Stop');
    }
};

const car = new Car;
*/

// Modefiers

/*
class Vehicle {
    move(speed: number){
        console.log(`Move with speed ${speed} km/h`);
    }

    stop(){
        console.log('Stop');
    }

    private currentSpeed(speed: number){
        console.log(`Current speed is ${speed}`);
    }

    protected carLog(carId: number){
        console.log(carId);
    }
};


class Car extends Vehicle {
    changeSpeed(speed: number){
        this.move(speed);
    }

}

const car1 = new Car;
car1.move(200);
*/

// Constructor

/*
class Vehicle {
    move(speed: number){
        console.log(`Move with speed ${speed} km/h`);
    }

    stop(){
        console.log('Stop');
    }
}

class Car extends Vehicle {
    color: string;
    maxSpeed: number;

    constructor(color: string, maxSpeed: number){
        super();
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
}
const car1 = new Car('black', 200);


class Car2 extends Vehicle {

    constructor( public color: string, public maxSpeed: number){
        super();
    }
}
const car2 = new Car2('white', 180);
*/

// Abstract Class

 abstract class Vehicle {

   abstract move(speed: number): void
    
    stop(){
        console.log('Stop');
    }

    abstract color: string;
}

class Car extends Vehicle {

    constructor(public color: string){
        super();
    }

    move(speed: number): void {
        console.log(`${speed}`);
    }
};
//const c1 = new Vehicle; Error




















