import { Action } from "./action";
import { STARTING_INTEREST_RATE } from "./constants";

async function processInputType(inputType: string): Promise<void> {
  switch(inputType) {
    case "boolean":
      // disqualifying a product

  }
}

export class Product {

  public static allProducts: Product[];

  public name: string;
  public interestRate: number = STARTING_INTEREST_RATE;
  public disqualified: boolean = false;

  public constructor(name: string) {
    this.name = name;
    Product.allProducts.push(this);
  }

  public async action(action: Action, ...inputs: any[]): Promise<void> {
    if (action.numInputs !== inputs.length) {
      throw new Error(`Wrong number of inputs. Expected ${action.numInputs}, got ${inputs.length}`)
    }
    if ((action.target) && !(action.targetProperty)) {

    } else if (!(action.target) && (action.targetProperty)) {
      const propertyName: string = (action.targetProperty.split("."))[1];
      if (this[propertyName]) {
        
      }
    }
    // switch(action.type) {
    //   case "interestRate":
    //     this.interestRate += action.input;
    //     break;
    //   case "disqualified":
    //     this.disqualified = true;
    //     break;
    //   default:
    //     // do nothing
    // }

  }
}
