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
const donations_repository_1 = require("../repositories/donations.repository");
const donations_1 = require("../models/donations");
let DonationsController = class DonationsController {
    constructor(donationsRepo) {
        this.donationsRepo = donationsRepo;
    }
    async donations(donations) {
        return this.donationsRepo.create(donations);
    }
};
__decorate([
    rest_1.post('/donations'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [donations_1.Donations]),
    __metadata("design:returntype", Promise)
], DonationsController.prototype, "donations", null);
DonationsController = __decorate([
    __param(0, repository_1.repository(donations_repository_1.DonationsRepository.name)),
    __metadata("design:paramtypes", [donations_repository_1.DonationsRepository])
], DonationsController);
exports.DonationsController = DonationsController;
//# sourceMappingURL=donations.controller.js.map