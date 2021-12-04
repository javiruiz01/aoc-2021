import { input } from "./input.js";

let total = 0;
let previous = input[0] + input[1] + input[2];
for (let i = 1; i < input.length - 2; i++) {
  const current = input[i] + input[i + 1] + input[i + 2];
  if (previous < current) total++;

  previous = current;
}

console.log(total);