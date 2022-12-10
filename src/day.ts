import fs from 'fs';

abstract class Day {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  async partOne(): Promise<string> {
    const content = await fs.promises.readFile(`./inputs/day${this.id}/part1.txt`);
    const result = this.solvePartOne(content.toString());
    return result;
  }

  async partTwo(): Promise<string> {
    const content = await fs.promises.readFile(`./inputs/day${this.id}/part2.txt`);
    const result = this.solvePartTwo(content.toString());
    return result;
  }

  abstract solvePartOne(input: string) : string;
  abstract solvePartTwo(input: string) : string;
}

export {Day};
