import { DonationsRepository } from "../repositories/donations.repository";
import { Donations } from "../models/donations";
export declare class DonationsController {
    private donationsRepo;
    constructor(donationsRepo: DonationsRepository);
    donations(donations: Donations): Promise<Donations>;
}
