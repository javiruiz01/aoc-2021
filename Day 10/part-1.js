import { closingCharacterMap, closingCharacters, readInput } from "./utils.js";

// const input = './Day 10/test-input.txt';
const input = './Day 10/input.txt';
const lines = await readInput(input);

const illegalCharacters = [];

for (const line of lines) {
  const stack = [];

  for (const char of line.split('')) {
    const isClosingChar = closingCharacters.includes(char);

    if (!isClosingChar) {
      stack.push(char);
    } else {
      const top = stack.pop();
      const { opening } = closingCharacterMap[char];
      if (opening !== top) {
        illegalCharacters.push(char);
        break;
      }
    }
  }
}

const result = illegalCharacters.reduce((acc, item) => acc += closingCharacterMap[item].errorScore, 0)
console.log(result)

