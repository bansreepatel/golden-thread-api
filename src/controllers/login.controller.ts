import { get, post, requestBody, HttpErrors } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from "../models/login";
import { sign, verify } from "jsonwebtoken";

export class LoginController {
    constructor(@repository(UserRepository.name) private userRepo: UserRepository) { }

    @post('/login')
    async login(@requestBody() login: Login): Promise<any> {
        var i;
        var users = await this.userRepo.find();
        var username = login.username;
        var password = login.password;
        for (i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username && user.password == password) {
                var jwt = sign(
                    {
                        user: {
                            id: user.id,
                            firstname: user.firstname,
                            username: user.username
                        },
                        anything: "hello"
                    },
                    'shh',
                    {
                        issuer: 'auth.ix.co.za',
                        audience: 'ix.co.za',
                    },
                );
                return {
                    token: jwt,
                };
            }
        }
        throw new HttpErrors.Unauthorized('User not found, sorry!');
    }
    @post('/login-with-query')
    async loginWithQuery(@requestBody() login: Login): Promise<User> {
        var users = await this.userRepo.find({
            where: {
                and: [{ username: login.username }, { password: login.password }],
            },
        });
        if (users.length == 0) {
            throw new HttpErrors.Unauthorized('User not found, sorry!');
        }
        return users[0];
    }
}