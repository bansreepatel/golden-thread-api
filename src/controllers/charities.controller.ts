import { get, post, requestBody, param, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { CharitiesRepository } from "../repositories/charities.repository";
import { Charities } from "../models/charities";

export class CharitiesController {
    // has get method (with /charities) that will return a list of charities 
    constructor(@repository(CharitiesRepository.name) private charitiesRepo: CharitiesRepository) {}
    @post('/charities')
    async charities(@requestBody() charities: Charities) {
        return this.charitiesRepo.create(charities);
    }

    @get('/charities')
    async getAllCharities(): Promise<Array<Charities>> {
        return await this.charitiesRepo.find();
    }

    @get('/charities{charity_id}')
    async findCharityById(@param.path.number('charity_id') charity_id: number): Promise<Charities> {
        let charityExists: boolean = !!(await this.charitiesRepo.count({ charity_id }));
        if (!charityExists) {
            throw new HttpErrors.BadRequest(`charity id ${charity_id} does not exist`);
        }
        return await this.charitiesRepo.findById(charity_id);
    }
}
