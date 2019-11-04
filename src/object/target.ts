import { Person } from "./person";
import { Product } from "./product";

const VALID_TYPES: string[] = ["String", "Number", "Boolean", "string", "number", "boolean",
  "Person", "Person[]", "Product", "Product[]", "void", "Promise<void>"
];

export class Target {

  public static targetPersonByName(name: string): Person {
    const result = Person.people.find((person, index, arr) => {
      return person.name === name;
    });
    if (!result) {
      throw new Error("no person found with that name");
    } else {
      return result;
    }
  }

  public static targetProductByName(name: string): Product {
    const result = Product.allProducts.find((prod, index, arr) => {
      return prod.name === name;
    });
    if (!result) {
      throw new Error("no person found with that name");
    } else {
      return result;
    }
  }

  public targetObj: any; // reference to the Object being modified
  public targetProperty: string; // string name of the property to be modified (_MUST_ exist on targetObj)
  public targetType: string; // the primitive or Object type of targetObj.targetProperty

  public constructor(obj: any, propName: string, type: string) {
    if (VALID_TYPES.indexOf(type) < 0) {
      throw new Error("invalid targetType specified. Please select one of: " + VALID_TYPES.join(", "));
    } else if (!(obj)) {
      throw new Error("instance property Target.targetObj must be a valid Object reference");
    } else if (!(obj[propName])) {
      throw new Error(`Property ${propName} does not exist on type ${obj.constructor.name}`);                                                                                                                                                                                                                      // } else if ((obj) && (obj[propName]) && (!(typeof obj[propName] === type) && !(obj[propName] instanceof Object)))
    } else if (obj[propName].construtor.name !== type) {
      throw new Error(`error typechecking obj[propName]; expected ${type}, but obj.${propName} is a(n) ${obj[propName].constructor.name}
        or its corresponding primitive`);
    } else {
      this.targetObj = obj;
      this.targetProperty = propName;
      this.targetType = type;
    }
  }
  
}
