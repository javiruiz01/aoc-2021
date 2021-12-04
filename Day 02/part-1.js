import { input } from "./input.js";

let horizontal = 0;
let depth = 0;

for (const instruction of input) {
  const [direction, rawUnits] = instruction.split(" ");
  const units = Number(rawUnits);

  switch (direction) {
    case 'forward':
      horizontal += units;
      break;
    case 'down':
      depth += units;
      break;
    case 'up':
      depth -= units;
      break;
  }
}

const total = horizontal * depth
console.log({ horizontal, depth, total })