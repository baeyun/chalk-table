<h1 align="center">Chalk Table</h1>

<p align="center">A mini terminal table tool with chalk support out of the box.</p>

`chalk-table` is a project I forked from [@deoxxa](http://github.com/deoxxa)'s cool `asciitable` package. I've added support for chalk and a few extra fixes. In case you're wondering, it can still render simple tables with headings and pretty hyphen/pipe character-based formatting.

## Install

```shell
npm i chalk-table --save
```

If you use yarn, you know how it goes. :D

## Quick example:

We'll render the following ascii table:

<p align="center">
  <img src="https://raw.githubusercontent.com/bukharim96/chalk-table/master/resources/screenshot.png">
</p>

The above example table has been built with the following code:

```javascript
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
```

There are a few key differences from `asciitable`'s default settings. For instance:
 -  the `intersectionCharacter` option defaults to a `+` character.
 - There's an additional `leftPad` option which allows control over how many padding the table should be from the left of the terminal view.
- There's also no `skinny` option.

For more documentation or a _getting-started_ guide, head over to `asciitable`'s [repository](https://github.com/deoxxa/asciitable).

Happy hacking!
