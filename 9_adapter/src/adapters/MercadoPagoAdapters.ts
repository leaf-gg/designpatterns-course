import IMercadoPagoPayment from "../mercadopago/IMercadoPagoPayment";
import MercadoPago from "../mercadopago/MercadoPago";
import Token from "../utils/Token";

export default class MercadoPagoAdapters implements IMercadoPagoPayment{
    private token: Token;

    constructor(private mercadopago: MercadoPago) {
        console.log("Adapting Mercadopago using patterns and methods from Paypal.");
      }
    sendPayment(): void {
        throw new Error("Method not implemented.");
    }
    receivePayment(): void {
        throw new Error("Method not implemented.");
    }
    
      authToken(): Token {
        return new Token();
      }
      paypalPayment(): void {
        return this.mercadopago.sendPayment();
      }
      paypalReceive(): void {
        return this.mercadopago.receivePayment();
      }

}