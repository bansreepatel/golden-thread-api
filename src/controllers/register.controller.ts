import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";

export class RegisterController {
  // the constructor links the controller and the repository
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @post('/register')
  async createUser(@requestBody() user: User) {
    return await this.userRepo.create(user);
  }
 
  @get('/register')
  async getAllUsers(): Promise<Array<User>> {
      return await this.userRepo.find();
  }
}