# Rules Engine

This solution shall dynamically generate product pricing from a set of rules defined by the finance team at Visio Lending. We know the initial rules, but they could change at any time, could be represented in any way, and it may be necessary to extend the rules engine (i.e. adding new kinds of actions or triggers) without altering the codebase.

## Acceptance Criteria

1. Rules can be defined _outside the code_.

2. A rule definition should define an action, any parameters / arguments as appropriate (if applicable), and the condition(s) which trigger the action.

3. 100% test coverage as measured by NYC (or as close to it as is practical)

4. The rules engine can be extended (perhaps by adding new kinds of actions, triggers, or other objects) without modifying the codebase, just the input

5. __Rules are loaded at runtime__.

&nbsp;

## Usage

0. Prerequisites: Nodejs version >= 12.x ("Latest Features"; however the 10.x LTS version should work fine with this project if that is preferred); NPM version >= 6.x.
  - __Windows__ binaries available at http://nodejs.org
  - __Mac OSX__ users can simply run `brew install node` (visit http://brew.sh if you do not already have Homebrew)
  - __Linux__ users just need to add the NodeSource repository by running `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`, then simply `sudo apt install nodejs`

You can confirm that you have the prerequisites installed properly by running `node -v` and `npm -v` respectively in a new Terminal/(Git) Bash/Command Prompt.

1. Clone this repository by running `git clone https://github.com/DavidMallett/rules-engine.git`, or navigating to the repository in Github and clicking the "Set up in Desktop" version (separate application GitHub Desktop required)

2. In a new Terminal/Shell, navigate to where you cloned the repo (most likely the command `cd ~/rules-engine` will accomplish this) and run `npm install`.


For convenience, a set of basic actions, conditions, and rules are included. These are for example only.

ACTION_LIST:
[0] reduce interest rate
[1] raise interest rate
[2] disqualify product
[3] set new price
[4] change product name

CONDITION_LIST:
[0] if `person.creditScore >== 720`
[1] if `person.creditScore < 720`
[2] if `person.state === "FL"`
[3] if `product.name === "7-1 ARM"`
[4] if `Person.people.length > 10`
[5] if `Products.allProducts.length <== 5`
[6] static (no condition)