import { ExecutionContext, Macro, TestInterface } from "ava";
import { Condition, Person, Product, Rule, RulesEngine } from "./";

export async function unitTestBeforeHook(t: ExecutionContext, className: string): Promise<void> {
  console.log(`Unit tests for ${className} class constructor and methods`);
  await Promise.resolve();
}

// export async function testHappyPath(t: ExecutionContext, )
