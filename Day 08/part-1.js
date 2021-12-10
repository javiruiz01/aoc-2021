import { readInput } from "./utils.js";

// const input = './Day 08/test-input.txt';
const input = './Day 08/input.txt';

const lines = (await readInput(input))
  .map(line => line.split('|').map(item => item.trim().split(' ')))

const lengths = [2, 3, 4, 7]; // Length for numbers 1, 4, 7, 8
let total = 0;
for (const [_, output] of lines) {
  total += output.filter(item => lengths.includes(item.length)).length;
}

console.log({ total })
