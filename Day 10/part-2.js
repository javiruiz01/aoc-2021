import { closingCharacterMap, closingCharacters, openingCharacterMap, readInput } from "./utils.js";

// const input = './Day 10/test-input.txt';
const input = './Day 10/input.txt';
const lines = await readInput(input);

const closingCharsByLine = [];

for (const line of lines) {
  let stack = [];
  const lineCompletion = [];

  for (const char of line.split('')) {
    const isClosingChar = closingCharacters.includes(char);

    if (!isClosingChar) {
      stack.push(char);
    } else {
      const top = stack.pop();
      const { opening } = closingCharacterMap[char];

      if (opening !== top) {
        // Discard corrupted line
        stack = [];
        break;
      }
    }
  }

  // Complete line
  while (stack.length !== 0) {
    const top = stack.pop();
    lineCompletion.push(openingCharacterMap[top]);
  }

  if (lineCompletion.length > 0) closingCharsByLine.push(lineCompletion)
}

const scoreByLine = closingCharsByLine
  .map(line => line.reduce(calculateTotalScoreByChar, 0));

const middle = Math.floor(scoreByLine.length / 2);
const result = [...scoreByLine].sort((a, b) => a - b)[middle];
console.log({ result })

function calculateTotalScoreByChar(total, char) {
  const { contestScore } = closingCharacterMap[char];
  return total * 5 + contestScore;
}