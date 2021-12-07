import { countFishes, readInput } from "./utils.js";

// const input = './Day 06/test-input.txt';
const input = './Day 06/input.txt';

const fishes = await readInput(input);

const total = countFishes(fishes, 256);
console.log(total);

