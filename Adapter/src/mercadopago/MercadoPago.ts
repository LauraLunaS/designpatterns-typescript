import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago"

export default class MercadoPago implements IMercadoPago {

    private token: Token;

    authToken(): Token {
        return new Token();
    }

    mercadopagoPayment(): void {
        this.token = this.authToken();
        console.log("Enviando pagamentos via MercadoPago.");
    }

    mercadopagoReceive(): void {
        console.log("Recebendo pagamentos via MercadoPago.");
    }
    
}