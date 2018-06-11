import { get, post, requestBody, param } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";


export class UserController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository) {}

  @get('/user')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('user/{user_id}/donations') 
  async getDonationsByUserId(
    @param.path.number('user_id') userId: number,
    @param.query.date('date_from') dateFrom: Date)
  {
    console.log(userId);
    console.log(dateFrom);
  }
}