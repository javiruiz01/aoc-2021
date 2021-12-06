import { getMaxCoordinates, readInput } from './utils.js';

// const input = './Day 05/test-input.txt';
const input = './Day 05/input.txt';
const lines = await readInput(input);

const { maxX, maxY } = getMaxCoordinates(lines);

const plane = Array.from({ length: maxY + 1 }, () => Array.from({ length: maxX + 1 }, () => null));

for (const { x1, y1, x2, y2 } of lines) {
  if (x1 !== x2 && y1 !== y2) continue;

  if (x1 !== x2) {
    const start = Math.min(x1, x2);
    const end = Math.max(x1, x2);
    for (let i = start; i <= end; i++) {
      plane[y1][i] = plane[y1][i] != null ? ++plane[y1][i] : 1;
    }
  } else {
    const start = Math.min(y1, y2);
    const end = Math.max(y1, y2);
    for (let i = start; i <= end; i++) {
      plane[i][x1] = plane[i][x1] != null ? ++plane[i][x1] : 1;
    }
  }
}

const count = plane
  .flatMap(item => item)
  .filter(item => Boolean(item) && item >= 2).length;
console.log(count)