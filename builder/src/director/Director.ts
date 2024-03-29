import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {

    constructor(private builder: IBuilder) {

    }

    constructSedanCar() {

        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTrasmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));

    }

    constructTruck() {

        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTrasmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));

    }

    constructMotocycle() {

        this.builder.setVehicleType(VehicleType.MOTOCYCLE);
        this.builder.setSeats(2);
        this.builder.setTrasmission(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(1300));
        this.builder.addWheel(new Wheel(12));
        this.builder.addWheel(new Wheel(12));

    }
}
