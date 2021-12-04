import { input } from "./input.js";

let [previous] = input;
let sum = 0;
for (let i = 1; i < input.length; i++) {
  if (previous < input[i]) sum++;
  previous = input[i];
}

console.log(sum);