import { CharitiesRepository } from "../repositories/charities.repository";
import { Charities } from "../models/charities";
export declare class CharitiesController {
    private charitiesRepo;
    constructor(charitiesRepo: CharitiesRepository);
    charities(charities: Charities): Promise<Charities>;
    getAllCharities(): Promise<Array<Charities>>;
    findCharityById(charity_id: number): Promise<Charities>;
}
