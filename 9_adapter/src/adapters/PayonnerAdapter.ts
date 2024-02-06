import Payonner from "../payonner/Payonner";
import IPaypalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapters implements IPaypalPayment {
  private token: Token;

  constructor(private payonner: Payonner) {
    console.log("Adapting Payonner using patterns and methods from Paypal.");
  }

  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    return this.payonner.sendPayment();
  }
  paypalReceive(): void {
    return this.payonner.receivePayment();
  }
}
