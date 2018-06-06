import { PaymentRepository } from "../repositories/payment.repository";
import { Payment } from "../models/payment";
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    getAllPayments(): Promise<Array<Payment>>;
    payment(payment: Payment): Promise<Payment>;
}
