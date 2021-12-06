import fs from 'fs/promises';

export async function readInput(input) {
  return (await fs.readFile(input, 'utf8'))
    .split('\n')
    .map(line =>
      line
        .split(' -> ')
        .map(item => item.split(','))
        .flatMap(item => item)
    ).map(([x1, y1, x2, y2]) => ({ x1: Number(x1), y1: Number(y1), x2: Number(x2), y2: Number(y2) }));
}

export function getMaxCoordinates(lines) {
  return lines
    .reduce(({ maxX, maxY }, { x1, y1, x2, y2 }) => ({
      maxX: Math.max(maxX, x1, x2),
      maxY: Math.max(maxY, y1, y2)
    }), { maxX: 0, maxY: 0 })
}