import * as test from "ava";
import { Condition, Person, Product, Rule, RulesEngine } from "../";

test.serial("Unit test for Person constructor (happy path)", t => {
  // static variable Person.people should not be null and should start as an empty array
  t.truthy(Person.people);
  t.deepEqual(Person.people, []);

  const dan: Person = new Person("Dan", 780, "TX");

  for (const property in dan) {
    t.truthy(dan[property]);
  }
  
  t.truthy(dan);
  t.truthy(dan.name);
  t.truthy(dan.creditScore);
  t.truthy(dan.state);
});
