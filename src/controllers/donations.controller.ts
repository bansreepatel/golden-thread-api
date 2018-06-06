import { get, post, requestBody, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { DonationsRepository } from "../repositories/donations.repository";
import { Donations } from "../models/donations";

export class DonationsController {
  constructor(@repository(DonationsRepository.name) private donationsRepo: DonationsRepository) {}

  @post('/donations')
  async donations(@requestBody() donations: Donations) {
      return this.donationsRepo.create(donations);
  }
}