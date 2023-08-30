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
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function (speed) {
        console.log("Move with speed ".concat(speed, " km/h"));
    };
    Vehicle.prototype.stop = function () {
        console.log('Stop');
    };
    Vehicle.prototype.currentSpeed = function (speed) {
        console.log("Current speed is ".concat(speed));
    };
    Vehicle.prototype.carLog = function (carId) {
        console.log(carId);
    };
    return Vehicle;
}());
;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.changeSpeed = function (speed) {
        this.move(speed);
    };
    return Car;
}(Vehicle));
var car1 = new Car;
car1.move(200);
