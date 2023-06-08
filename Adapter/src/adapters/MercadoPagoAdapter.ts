import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayments from "../paypal/IPayPalPayments";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments {

    private token: Token;    

    constructor(private mercadopago: MercadoPago) {
        console.log("Adaptando o Payonner utilizando os métodos padrões do Mercado Pago.");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercadopago.mercadopagoPayment();
    }
    paypalReceive(): void {
        return this.mercadopago.mercadopagoReceive();
    }

}