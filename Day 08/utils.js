import fs from "fs/promises";

export async function readInput(input) {
  const line = await fs.readFile(input, 'utf8');

  return line.split('\n');
}