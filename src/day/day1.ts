import { Day } from "../day";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solvePartOne(input: string): string {
    const elves = input.split('\n\n');

    const max_cals = elves.reduce((max, elf) => {
      return Math.max(max, this.calsForElf(elf));
    }, 0);

    return max_cals.toString();
  }

  solvePartTwo(input: string): string {
    const elves = input.split('\n\n');

    const max_cals = elves.reduce((max, elf) => {
      return this.maintainTopThree(max, this.calsForElf(elf));
    }, [0, 0, 0]);
    const total = max_cals[0] + max_cals[1] + max_cals[2];

    return total.toString();
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

  maintainTopThree(topThree: number[], candidate: number) {
    topThree.sort((a, b) => a - b);
    if (topThree[0] < candidate) {
      topThree[0] = candidate;
    }

    return topThree;
  }
}

export default new Day1;
