import { input } from "./input.js";

let gamma = '';
let epsilon = '';

const wordLength = input[0].length;
for (let i = 0; i < wordLength; i++) {
  const ones = input.filter(line => line[i] === '1').length;
  const zeroes = input.length - ones;

  gamma += ones > zeroes ? '1' : '0';
  epsilon += ones < zeroes ? '1' : '0';
}

const consumption = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log({ gamma, epsilon, consumption })