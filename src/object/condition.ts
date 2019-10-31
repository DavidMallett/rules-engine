export class Condition {
  public operator: any;
  public operand: any;
  public comparator: string;
  public trigger: boolean;

  public constructor(operator: any, comparator: string, operand: any) {
    this.operator = operator;
    this.operand = operand;
    this.comparator = comparator;
    switch(comparator) {
      case "eq":
        (operator == operand) ?
          this.trigger = true :
          this.trigger = false;
        break;
      case "gt":
        (operator > operand) ?
          this.trigger = true :
          this.trigger = false;
        break;
      case "gte":
        (operator >= operand) ?
          this.trigger = true :
          this.trigger = false;
        break;
      case "lt":
        (operator < operand) ?
          this.trigger = true :
          this.trigger = false;
        break;
      case "lte":
        (operator <= operand) ?
          this.trigger = true :
          this.trigger = false;
        break;
      default:
        throw new Error("invalid comparator");
    }
  }
}