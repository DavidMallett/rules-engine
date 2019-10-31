import * as test from "ava";
import { Condition, Person, Product, Rule, RulesEngine } from "./";

test.serial("eq (person.name) (positive)", async t => {
  const f: Person = new Person("Frank", 720, "NJ");
  const p: Product = new Product("iPhone X", 5);
  const c: Condition = new Condition(f.name, "eq", "Frank");
  const r: Rule = new Rule(c, );
  await RulesEngine.runRules(f, p, [r]);
  t.false(p.disqualified);
})