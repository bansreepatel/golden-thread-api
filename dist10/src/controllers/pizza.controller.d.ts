import { Pizza } from "../models/pizza";
import { PizzaRepository } from "../repositories/pizza.repository";
export declare class PizzaController {
    private pizzaRepo;
    constructor(pizzaRepo: PizzaRepository);
    createPizza(pizza: Pizza): Promise<Pizza>;
    getAllPizzas(): Promise<Array<Pizza>>;
}
