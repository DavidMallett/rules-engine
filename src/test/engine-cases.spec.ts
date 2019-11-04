import * as test from "ava";
import * as basicRules from "../rulesets/basic-ruleset";
import { Condition, Person, Product, Rule, RulesEngine } from "../";


// test.serial("eq (person.name) (positive)", async t => {
  // const f: Person = new Person("Frank", 720, "NJ");
  // const p: Product = new Product("iPhone X");
  // const c: Condition = new Condition(f.name, "eq", "Frank");
  // const r: Rule = new Rule(c, f, );
  // await RulesEngine.runRules(f, p, [r]);
  // t.false(p.disqualified);
// });

function macro(t: test.ExecutionContext, r: Rule, p: Person, q: Product): void {
  const engine: RulesEngine = new RulesEngine([r]);
}

