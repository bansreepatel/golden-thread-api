import { get, post, requestBody, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { PaymentRepository } from "../repositories/payment.repository";
import { Payment } from "../models/payment";

export class PaymentController {
  constructor(@repository(PaymentRepository.name) private paymentRepo: PaymentRepository) {}

  @get('/payment')
  async getAllPayments(): Promise<Array<Payment>> {
    return await this.paymentRepo.find();
  }

  @post('/payment')
  async payment(@requestBody() payment: Payment) {
      return this.paymentRepo.create(payment);
  }
}