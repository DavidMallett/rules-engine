export class Product {

  public name: string;
  public interestRate: number;
  public disqualified: boolean;

  public constructor(name: string, ir: number) {
    this.name = name;
    this.interestRate = ir;
  }

}
