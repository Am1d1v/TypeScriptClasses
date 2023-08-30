

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































