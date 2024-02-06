import MercadoPagoAdapters from "./adapters/MercadoPagoAdapters";
import PayonnerAdapters from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPaypalPayment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

// const payment: IPaypalPayment = new Paypal();
// const payment: IPaypalPayment = new PayonnerAdapters(new Payonner);
const payment: IPaypalPayment = new MercadoPagoAdapters(new MercadoPago);
// payment.sendPayment();
// payment.receivePayment();

payment.paypalPayment();
payment.paypalReceive();