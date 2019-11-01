import { STATES } from "./constants";

export class Person {

  public static people: Person[] = [];

  public name: string;
  public creditScore: number;
  public state: string;

  public constructor(name: string, creditScore: number, state: string) {
    this.name = name;
    if (STATES.indexOf(state) < 0) { // Array.indexOf is not present in ES3/ES5
      throw new Error("'State' must be one of the 50 US States");
    }
    if (creditScore > 800 || creditScore < 0) {
      throw new Error("'creditScore' is invalid. Must be a positive integer less than 800");
    }
    this.creditScore = creditScore;
    this.state = state;

    Person.people.push(this);
  }
}
