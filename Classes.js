// Class Interface
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function (speed) {
        console.log("Move with speed ".concat(speed, " km/h"));
    };
    Vehicle.prototype.stop = function () {
        console.log('Stop');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(Vehicle));
;
//const c1 = new Vehicle; Error
