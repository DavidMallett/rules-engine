import { Action } from "./action";
import { Condition } from "./condition";

export class Rule {
  
  public condition: Condition
  public action: Action;
  public parameters?: string[] = [];

  public constructor(condition, action, ...parameters) {
    this.condition = condition;
    this.action = action;
    this.parameters = parameters;
  }
}
