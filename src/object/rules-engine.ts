import { Person } from "./person";
import { Product } from "./product";

export interface Rule {

}

export class RulesEngine {

  /**
   * Rules can be in any form but must include:
   * action
   * parameter(s) the action may need
   * condition under which to execute the action
   * @param person 
   * @param prod 
   * @param rules 
   */
  public static async runRules(person: Person, prod: Product, rules: Rule[]): Promise<void> {
    
  }

}
