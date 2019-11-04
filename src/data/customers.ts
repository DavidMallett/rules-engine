import { ExecutionContext, Macro, TestInterface } from "ava";
import { Person, Product } from "../";

export class CustomTestRunner {
  public customers: Person[] = [];
  public products: Product[] = [];

  public static basicSampleData(): CustomTestRunner {
    return {
      customers: [
        new Person("Bob Smith", 725, "TX"),
        new Person("Rick Sanchez", 600, "FL"),
        new Person("Beth Smith", 700, "AL"),
        new Person("Morty Smith", 0, "CA"),
        new Person("Summer Smith", 800, "CA")
      ],
      products: [
        new Product("Party Starter")
      ]
    } as CustomTestRunner;
  }

  public constructor() {

  }

}
