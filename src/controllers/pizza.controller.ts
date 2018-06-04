import { get, post, requestBody } from "@loopback/rest";
import { Pizza } from "../models/pizza";
import { PizzaRepository } from "../repositories/pizza.repository";
import { repository } from "@loopback/repository";

export class PizzaController {
  constructor(@repository(PizzaRepository.name) private pizzaRepo: PizzaRepository) {}

  @post('/pizzas')
  async createPizza(@requestBody() pizza: Pizza) {
    return await this.pizzaRepo.create(pizza);
  }

  @get('/pizzas')
  async getAllPizzas(): Promise<Array<Pizza>> {
    return await this.pizzaRepo.find();
  }
}