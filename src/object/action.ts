import { Target } from "./target";

export class Action {

  public actionName: string;
  public operation?: ((...args) => void); // required but need not be defined in constructor
  public target: Target; // required but need not be defined in constructor
  public numInputs: number;
  public inputType: string;

  public constructor(name: string, numInputs: number, target: Target, operation?: ((...inputs) => void)) {
    this.actionName = name;
    this.target = target;
    this.numInputs = numInputs;
    this.inputType = typeof target.targetType;
    this.operation = operation;
  }

  public defineOperation(op: ((...args) => void)): void {
    if (op.arguments.length !== this.numInputs) {
      throw new Error(`Wrong number of inputs. Expected ${this.numInputs}, but got ${op.arguments.length}`)
    } else {
      this.operation = op;
    }
  }

  public setTarget(target: Target): void {
    if (!(target) || ((target) && (!target.targetProperty || !target.targetObj || !target.targetType))) {
      throw new Error("must provide a valid Target on which to execute the action");
    } else {
      this.target = target;
    }
  }

  public execute(...args: any[]): void {
    if (!this.operation) {
      throw new Error("No operation defined for action " + this.actionName);
    } else {
      this.operation(args);
    }
  }
}
