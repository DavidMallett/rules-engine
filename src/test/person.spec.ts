import * as test from "ava";
import * as Errors from "../data/errors";
import { Condition, Person, Product, Rule, RulesEngine } from "../";
import { unitTestBeforeHook } from "../macros";

const classProperties: string[] = ["name", "creditScore", "state"];

test.before(unitTestBeforeHook, "Person");

test.serial("Unit test for Person constructor (happy path)", t => {
  // static variable Person.people should not be null and should start as an empty array
  t.truthy(Person.people);
  t.deepEqual(Person.people, []);

  const dan: Person = new Person("Dan", 780, "TX");
  t.truthy(dan);
  for (const property of classProperties) {
    t.truthy(dan[property]);
  }
  t.true(Person.people.length === 1);
});

test.serial("Negative test case for Person constructor (invalid state)", async t => {
  const invalidState = () => {
    return new Person("Fernando", 800, "Puerto Rico");
  }
  const err: Error = t.throws(() => {
    invalidState()
  }, Error);
  t.is(err.message, Errors.stateErrorMessage);
  // const err: Error = t.throws(new Person("Fernando", 800, "Puerto Rico"),)
});

test.serial("Negative test case for Person constructor (invalid credit score) (1)", async t => {
  const err: Error = t.throws(() => {
    return new Person("Timmy", -6000, "OR");
  }, Error);
  t.is(err.message, Errors.creditErrorMessage);
});

test.serial("Negative test case for Person constructor (invalid credit score) (2)", async t => {
  const err: Error = t.throws(() => {
    return new Person("Jonny", 9000, "OR");
  }, Error);
  t.is(err.message, Errors.creditErrorMessage);
});
