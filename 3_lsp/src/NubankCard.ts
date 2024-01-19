import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("basic validation");
  }
  collectPayment(): void {
    console.log("payment realized.");
  }
}
