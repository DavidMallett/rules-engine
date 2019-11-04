export class Condition {
  public operator: string;
  public operand: string;
  public comparator: string;
  public trigger?: boolean = false;
  public description?: string;

  public constructor(operator: any, comparator: string, operand: any, description?: string) {
    this.trigger = false;
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
    this.description = description || "n/a";
  }

  // for when instances of this class are cast from object literals
  public evaluate(): boolean {
    if (this.trigger) {
      return true;
    } else {
      const test: Condition = new Condition(this.operator, this.comparator, this.operand, this.description || "");
      if ((test) && test.trigger) {
        this.trigger = true;
        return true;
      } else {
        this.trigger = false;
        return false;
      }
    }
  }

}