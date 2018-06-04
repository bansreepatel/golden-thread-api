import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class RegisterController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createUser(user: User): Promise<User>;
    getAllUsers(): Promise<Array<User>>;
}