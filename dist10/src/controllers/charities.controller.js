"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const charities_repository_1 = require("../repositories/charities.repository");
const charities_1 = require("../models/charities");
let CharitiesController = class CharitiesController {
    // has get method (with /charities) that will return a list of charities 
    constructor(charitiesRepo) {
        this.charitiesRepo = charitiesRepo;
    }
    async charities(charities) {
        return this.charitiesRepo.create(charities);
    }
    async getAllCharities() {
        return await this.charitiesRepo.find();
    }
    async findCharityById(charity_id) {
        let charityExists = !!(await this.charitiesRepo.count({ charity_id }));
        if (!charityExists) {
            throw new rest_1.HttpErrors.BadRequest(`charity id ${charity_id} does not exist`);
        }
        return await this.charitiesRepo.findById(charity_id);
    }
};
__decorate([
    rest_1.post('/charities'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [charities_1.Charities]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "charities", null);
__decorate([
    rest_1.get('/charities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "getAllCharities", null);
__decorate([
    rest_1.get('/charities{charity_id}'),
    __param(0, rest_1.param.path.number('charity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharitiesController.prototype, "findCharityById", null);
CharitiesController = __decorate([
    __param(0, repository_1.repository(charities_repository_1.CharitiesRepository.name)),
    __metadata("design:paramtypes", [charities_repository_1.CharitiesRepository])
], CharitiesController);
exports.CharitiesController = CharitiesController;
//# sourceMappingURL=charities.controller.js.map