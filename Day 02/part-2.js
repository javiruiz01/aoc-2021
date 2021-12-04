import { input } from "./input.js";

let horizontal = 0;
let aim = 0;
let depth = 0;

for (const instruction of input) {
  const [direction, rawUnits] = instruction.split(" ");
  const units = Number(rawUnits);

  switch (direction) {
    case 'forward':
      horizontal += units;
      depth += units * aim;
      break;
    case 'down':
      aim += units;
      break;
    case 'up':
      aim -= units;
      break;
  }
}

const total = horizontal * depth;
console.log({ horizontal, depth, total });