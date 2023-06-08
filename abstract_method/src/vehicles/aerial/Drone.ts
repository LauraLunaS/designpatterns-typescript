import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {

    startRoute(): void {
        this.wind();
        this.getCargo();
        console.log("Iniciando a decolagem e trajeto...");
    }

    getCargo(): void {
        console.log("Carga ok.");
    }

    wind(): void {
        console.log("Sem ventos, ventos ok!");
    }

}