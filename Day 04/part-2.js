import { getResult, hasBingo, readInput } from "./utils.js";

// const input = './Day 04/test-input.txt';
const input = './Day 04/input.txt';
let [numbers, bingos] = readInput(input);
bingos = bingos.map(bingo => ({ bingo, hasBingo: false }));
const wonBingos = [];
let currentNumbers;

for (let i = 0; i < numbers.length; i++) {
  currentNumbers = numbers.slice(0, i);

  for (let j = 0; j < bingos.length; j++) {
    if (!bingos[j].hasBingo && hasBingo(bingos[j].bingo, currentNumbers)) {
      wonBingos.push(bingos[j].bingo);
      bingos[j].hasBingo = true;
    }
  }

  if (wonBingos.length === bingos.length) break;
}

console.log(getResult(wonBingos.at(-1), currentNumbers));
