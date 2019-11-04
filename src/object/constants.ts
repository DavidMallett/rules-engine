import { Action } from "./action";
import { Condition } from "./condition";
import { Person } from "./person";
import { Product } from "./product";
import { Target } from "./target";

export const STARTING_INTEREST_RATE: number = 5.0;

export const STATES: string[] = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

export const ACTION_LIST: Action[] = [
  {
    actionName: "reduce interest rate",
    numInputs: 1,
    inputType: "number",
  },
  {
    actionName: "raise interest rate",
    numInputs: 1,
    inputType: "number"
  },
  {
    actionName: "disqualify product",
    numInputs: 0,
    inputType: "boolean"
  },
  {
    actionName: "set to new price",
    numInputs: 1,
    inputType: "number"
  },
  {
    actionName: "change product name",
    numInputs: 1,
    inputType: "string"
  }
] as Action[];

export const CONDITION_LIST: Condition[] = [
  {
    operator: "person.creditScore",
    operand: 720,
    comparator: "gte",
    description: `if person's credit score is greater than or equal to 720, `,
    trigger: false
  },
  {
    operator: "person.creditScore",
    operand: 720,
    comparator: "lt",
    description: "if a person's credit score is less than 720, ",
    trigger: false
  },
  {
    operator: "person.state",
    operand: "FL",
    comparator: "eq",
    description: "if a person is from Florida, ",
    trigger: false
  },
  {
    operator: "product.name",
    operand: "7-1 ARM",
    comparator: "eq",
    description: `if the product name is`,
    trigger: false
  },
  {
    operator: "Person.people.length",
    operand: "10",
    comparator: "gt",
    description: "if there are more than 10 people total, ",
    trigger: false
  },
  {
    operator: "Products.allProducts.length",
    operand: 5,
    comparator: "lte",
    description: "if there are 5 or fewer products total, ",
    trigger: false
  },
  {
    operator: 1,
    operand: 1,
    comparator: "eq",
    description: "static",
    trigger: false
  },
  {
    operator: "person.name",
    operand: "David Mallett",
    comparator: "eq",
    description: "If the customer is David Mallett, ",
    trigger: false
  }
] as Condition[];
