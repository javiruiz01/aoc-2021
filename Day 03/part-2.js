import { input } from "./input.js";

const [oxygenGeneratorRating] = getRating(0, input, true);
const [co2ScrubberRating] = getRating(0, input, false);

const total = parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
console.log({ oxygenGeneratorRating, co2ScrubberRating, total })

function getRating(idx, remaining, greaterOrEqual) {
  if (remaining.length === 1) return remaining;

  const ones = [];
  const zeroes = [];
  for (const line of remaining) {
    if (line[idx] === '1') {
      ones.push(line);
    } else {
      zeroes.push(line);
    }
  }

  const condition = greaterOrEqual
    ? () => ones.length >= zeroes.length
    : () => ones.length < zeroes.length;
  idx++;
  return getRating(idx, condition() ? ones : zeroes, greaterOrEqual);
}