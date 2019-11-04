import { Person } from "./person";
import { Product } from "./product";
import { Rule } from "./rule";

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

  public rules: Rule[];

  public constructor(rules: Rule[]) {
    this.rules = rules;
  }

  public async runRules(person: Person, product: Product): Promise<string> {
    let output: string = "";
    for (const rule of this.rules) {
      if (rule.condition.trigger) {
        
      }
    }



    return Promise.resolve(output);
  }

}
