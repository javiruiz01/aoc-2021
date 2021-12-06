import fs from 'fs';

export function hasBingo(board, numbers) {
  const check = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      const result = matrix[i].every(number => numbers.includes(number));
      if (result) return true;
    }

    return false;
  }

  const transposed = () => board.at(0).map((_, idx) => board.map(row => row[idx]));
  return check(board) || check(transposed());
}

export function getResult(board, numbers) {
  const remainingSum = board
    .flatMap(item => item)
    .filter(item => !numbers.includes(item))
    .reduce((acc, item) => acc += item, 0)

  return remainingSum * numbers.at(-1);
}

export function readInput(input) {
  const lines = fs.readFileSync(input, 'utf8').split('\n');

  return [getNumbersFromLines(lines), getBingosFromLines(lines)];
}

function getNumbersFromLines(lines) {
  return lines
    .at(0)
    .split(',')
    .map(draw => Number(draw));
}

function getBingosFromLines(lines) {
  const lineAsNumbers = line => line
    .split(' ')
    .filter(item => Boolean(item))
    .map(item => Number(item))

  const rawBingos = lines
    .slice(1)
    .filter(line => line !== '')
    .map(lineAsNumbers);

  const bingos = [];
  while (rawBingos.length !== 0) {
    const rows = rawBingos.splice(0, 5);
    bingos.push(rows);
  }

  return bingos;
}