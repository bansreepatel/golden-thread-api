import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getDonationsByUserId(userId: number, dateFrom: Date): Promise<void>;
}
