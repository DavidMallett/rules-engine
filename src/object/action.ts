export class Action {
  public target: any;
  public operation: string;
  public offset: any;

  public constructor(target: any, operation: string, offset?: any) {
    switch(operation) {
      case "ADD":
        target += offset;
        break
    }
  }
}