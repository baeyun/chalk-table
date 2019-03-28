#!/usr/bin/env node

const chalk = require("chalk");
const chalkTable = require("../src");

const options = {
  leftPad: 2,
  columns: [
    { field: "id",     name: chalk.cyan("ID") },
    { field: "fruit",  name: chalk.magenta("Fruit") },
    { field: "veggie", name: chalk.green("Vegetable") },
    { field: "other",  name: chalk.yellow("Other") }
  ]
};

const table = chalkTable(options, [
  { id: 0, fruit: "🍇 Grapes",     veggie: "🌽 Maize",    other: "🍕 Pizza" },
  { id: 1, fruit: "🍈 Melon",      veggie: "🍅 Tomato",   other: "🍔 Hamburger" },
  { id: 2, fruit: "🍉 Watermelon", veggie: "🥑 Avocado",  other: "🌭 Hot Dog" },
  { id: 3, fruit: "🍊 Tangerine",  veggie: "🥦 Broccoli", other: "🥪 Sandwich" },
  { id: 4, fruit: "🍍 Pineapple",  veggie: "🥒 Cucumber", other: "🌮 Taco" }
]);

console.log(table);
