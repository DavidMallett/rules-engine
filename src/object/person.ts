import { STATES } from "./constants";

export class Person {

  public name: string;
  public creditScore: number;
  public state: string;

  public constructor(name: string, cs: number, st: string) {
    this.name = name;
    if (STATES.indexOf(st) < 0) { // Array.indexOf is not present in ES3/ES5
      throw new Error("'State' must be one of the 50 US States");
    }
    this.creditScore = cs;
    this.state = st;
  }
}
