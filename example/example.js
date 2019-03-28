#!/usr/bin/env node

const chalk = require("chalk");
const chalktable = require("../src");

const options = {
  skinny: true,
  columns: [
    { field: "ab", name: chalk.cyan("First") },
    { field: "b", name: chalk.yellow("Second") },
    { field: "c", name: "Third" },
    { field: "de", name: chalk.magenta("Fourth") }
  ]
};

const table = chalktable(options, [
  { ab: "a", b: "b", c: "c" },
  { ab: "asddsfa", b: "sss", c: "zxc" },
  { ab: chalk.red("dsgvdgsdvgssdf"), b: "x", c: chalk.green("eryty") },
  { ab: "m", b: "n", c: "o", de: chalk.blue("p") },
  { ab: 5, b: null, c: {}, de: [] },
  { ab: function() {} }
]);

console.log(table);
