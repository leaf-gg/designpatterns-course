import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verfying yout score on rewards.");
  }
  collectPayment(): void {
    console.log("Pay with rewards score.");
  }
}
