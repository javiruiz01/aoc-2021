import { getResult, hasBingo, readInput } from "./utils.js";

// const input = './Day 04/test-input.txt';
const input = './Day 04/input.txt';
const [numbers, bingos] = readInput(input);

numbersCheckLoop:
for (let i = 0; i < numbers.length; i++) {
  const currentNumbers = numbers.slice(0, i + 1);

  for (const bingo of bingos) {
    if (hasBingo(bingo, currentNumbers)) {
      console.log(getResult(bingo, currentNumbers))
      break numbersCheckLoop;
    }
  }
}

