import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Login } from "../models/login";

export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}
  @post('/login')
  async login(@requestBody() login: Login) {
      var i;
      var users = await this.userRepo.find();
      var email = login.username;
      var password = login.password;
      var id = login.id;
      for (i = 0; i < users.length; i++) {
          if(users[i].username == email && users[i].password == password && users[i].id == id){
              return users[i];
          }
    }
    return "ERROR";
  }
}