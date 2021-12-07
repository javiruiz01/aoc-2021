import { readInput } from "./utils.js";

// const input = './Day 07/test-input.txt';
const input = './Day 07/input.txt';

const positions = await readInput(input);
const mid = Math.floor(positions.length / 2);
const ordered = [...positions].sort((a, b) => a - b);
const median = positions.length % 2 !== 0
  ? ordered[mid]
  : (ordered[mid - 1] + ordered[mid]) / 2;

const result = positions.reduce((acc, item) => acc += Math.abs(item - median), 0);

console.log(result)