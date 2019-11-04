
export class Action {

  public actionName: string;
  public targetProperty?: string;
  public target?: any;
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

  public constructor(name: string, targetProperty?: string, target?: any, numInputs?: number, inputType?: string) {
    if (!targetProperty && !target) {
      throw new Error("must provide a target property or Object on which to perform the action");
    } else if (targetProperty && !(target)) {
      this.targetProperty = targetProperty;
    } else if (target && !(targetProperty)) {
      this.target = target;
    } else { // target and targetProperty both defined
      this.targetProperty = targetProperty;
      this.target = target;
    }


    this.actionName = name;

    this.numInputs = numInputs || 0;
    this.inputType = inputType || "boolean";
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
