import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto de bike...");
    }

    getCargo(): void {
        console.log("Pegamos o pedido, estamos prontos para enviar a encomenda!");
    }

}