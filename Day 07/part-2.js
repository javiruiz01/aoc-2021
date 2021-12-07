import { readInput } from "./utils.js";

// const input = './Day 07/test-input.txt';
const input = './Day 07/input.txt';

const positions = await readInput(input);

const mean = Math.floor(positions.reduce((acc, item) => acc += item, 0) / positions.length)

const memo = {};
const calculateFuel = (value) =>
  memo[value] ?? Array.from({ length: value + 1 }, () => null).reduce((acc, _, idx) => acc += idx, 0);

const result = positions.reduce((acc, item) => acc += calculateFuel(Math.abs(item - mean)), 0)
console.log(result)