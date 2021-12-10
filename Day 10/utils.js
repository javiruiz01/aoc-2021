import fs from 'fs/promises';

export async function readInput(input) {
  const file = await fs.readFile(input, 'utf8');

  return file.split('\n');
}

export const closingCharacterMap = {
  ')': { errorScore: 3, opening: '(', contestScore: 1 },
  ']': { errorScore: 57, opening: '[', contestScore: 2 },
  '}': { errorScore: 1197, opening: '{', contestScore: 3 },
  '>': { errorScore: 25137, opening: '<', contestScore: 4 },
};

export const openingCharacterMap = Object.entries(closingCharacterMap)
  .reduce((acc, [closing, { opening }]) => ({ ...acc, [opening]: closing }), {});
export const closingCharacters = Object.keys(closingCharacterMap);