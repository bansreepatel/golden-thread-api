import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from "../models/login";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: Login): Promise<any>;
    loginWithQuery(login: Login): Promise<User>;
}
