import Token from "../utils/Token";

export default interface IMercadoPago {

    authToken(): Token;
    mercadopagoPayment(): void;
    mercadopagoReceive(): void;

}