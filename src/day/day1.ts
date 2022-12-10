import { Day } from "../day";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solvePartOne(input: string): string {
    const elves = input.split('\n\n');

    const max_cals =  elves.reduce((max, elf) => {
      return Math.max(max, this.calsForElf(elf));
    }, 0);

    return max_cals.toString();
  }

  calsForElf(elf: string): number {
      return elf.split('\n').reduce((total, cal) => {
        return this.parseIntSafely(cal, 10) + total;
      }, 0);
  }

  parseIntSafely(int: string, radix: number): number {
    if ('' == int) {
      return 0;
    }

    return parseInt(int, radix);
  }

  solvePartTwo(input: string): string {
    return input;
  }
}

export default new Day1;
