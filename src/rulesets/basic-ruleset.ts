import { Action, BaseActions, BaseConditions, Condition, Rule, STARTING_INTEREST_RATE } from "../";

export const startingCost: Rule = new Rule(BaseConditions[6], BaseActions[3], STARTING_INTEREST_RATE);

export const disqualifyFloridians: Rule = new Rule(BaseConditions[2], BaseActions[2], "FL");

export const goodCreditBonus: Rule = new Rule(BaseConditions[0], BaseActions[0], 0.3);

export const lowerCreditPenalty: Rule = new Rule(BaseConditions[1], BaseActions[1], 0.5);

export const arm71increase: Rule = new Rule(BaseConditions[3], BaseActions[1], 0.5);

export const scaleCostForDemand: Rule = new Rule(BaseConditions[4], BaseActions[1], 0.4);

export const texasDiscount: Rule = new Rule(BaseConditions[2], BaseActions[0], 0.7);

export const secretReplacementItem: Rule = new Rule(BaseConditions[7], BaseActions[4], "Sulfuras, Hand of Ragnaros");
