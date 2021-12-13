import fs from 'fs/promises';

const input = './Day 09/test-input.txt';
// const input = './Day 09/input.txt';
const lines = await readInput(input);
const matrix = [];
for (const line of lines) {
  matrix.push(line.split(''));
}

const lowPoints = [];
for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    const points = [];
    // Up
    if (i - 1 >= 0) points.push(lines[i - 1][j]);
    // Left
    if (j - 1 >= 0) points.push(lines[i][j - 1]);
    // Down
    if (i + 1 < lines.length) points.push(lines[i + 1][j]);
    // Right
    if (j + 1 < lines[i].length) points.push(lines[i][j + 1]);

    if (Math.min(...points) > lines[i][j]) lowPoints.push(lines[i][j])
  }
}


async function readInput(input) {
  const file = await fs.readFile(input, 'utf8');

  return file.split('\n');
}