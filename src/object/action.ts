import { Target } from "./target";

// export interface Target {
//   targetObj: any; // reference to the Object being modified
//   targetProperty: string; // string name of the property to be modified (_MUST_ exist on targetObj)
//   targetType: string; // the primitive or Object type of targetObj
// }

export class Action {

  public actionName: string;
  // public targetObj?: any;
  // public targetProperty?: string;
  // public targetType?: string;

  public target?: Target;
  public numInputs: number;
  public inputType: string;
  // public type: string;

  // public constructor(input: any) {
  //   if ((input) && typeof input === "number") {
  //     this.type = "interestRate";
  //   } else if ((input) && typeof input === "string" && input.toLowerCase().indexOf("dis") > 0) {
  //     this.type = "disqualified";
  //   } else {
  //     console.log("Created an action that neither changes interest rate nor disqualifies a product");
  //     this.type = "custom";
  //   }
  // }

  // public constructor(name: string, numInputs: number, targetProperty?: string, targetObj?: any, inputType?: string) {
  public constructor(name: string, numInputs: number, target: Target) {
    if (!(target) || ((target) && (!target.targetProperty || !target.targetObj || !target.targetType))) {
      throw new Error("must provide a valid Target on which to execute the action");
    // } else if (target.targetProperty && !(target.targetObj)) {
    //   this.targetProperty = target.targetProperty;
    // } else if (target.targetObj && !(target.targetProperty)) {
    //   this.target = target;
    // } else { // target and targetProperty both defined
    //   this.targetProperty = targetProperty;
    //   this.target = target;
    // }
    } else {


      this.actionName = name;

      this.numInputs = numInputs;
      this.inputType = typeof target.targetType;
  }

  public execute(targetObject: any, ...inputs: any[]): void {
    if (this.numInputs === 0 && this.inputType === "boolean") {
      // case: targetObject is a Product we are disqualifying
      if (this.targetProperty === "product.disqualified") {
        targetObject.disqualified === true;
      }
    } else if (this.numInputs === 1) {
      if (this.targetProperty) {
        const arr: string[] = this.targetProperty.split(".");
        switch(arr[0]) { // cases: "product", "person"
          case "product":

        } 
      }
      switch(this.inputType) {
        case ""
      }
    }
  }
}
