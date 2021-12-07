import fs from "fs/promises";

export async function readInput(input) {
  const line = await fs.readFile(input, 'utf8');

  return line.split(',').map(item => Number(item));
}

export function countFishes(initialState, days) {
  const result = Array.from({ length: 9 }, () => 0);
  // Populate result with initial state
  for (const fish of initialState) {
    result[fish] = result[fish] + 1;
  }

  for (let i = 0; i < days; i++) {
    const [readyToHatch] = result;
    for (let j = 1; j <= 9; j++) {
      result[j - 1] = result[j];
      result[j] = 0;
    }

    result[6] = result[6] + readyToHatch;
    result[8] = readyToHatch;
  }

  return result.reduce((acc, item) => acc += item, 0);
}