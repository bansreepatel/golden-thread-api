import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";

export class UserController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @get('/user')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }
}
