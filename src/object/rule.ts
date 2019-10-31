
export interface Condition {
  operator: any;
  operand: any;
  comparator: string;
  trigger: boolean;
}

export class Rule {
  
  public action: string;
  public parameters?: string[] = [];
  public condition: Condition

  public constructor(cond, act, ...params) {
    this.condition = cond;
    this.action = act;
    this.parameters = params;
  }
}