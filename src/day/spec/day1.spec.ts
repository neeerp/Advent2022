import day1 from '../day1';

describe('On Day 1', () => {
  it('Part 1 returns the fattest elf', () => {
    const input = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000";
    expect(day1.solvePartOne(input)).toBe('24000');
  })

  it('Part 2 returns the three fattest elves', () => {
    const input = "1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000";
    expect(day1.solvePartTwo(input)).toBe('45000');
  })
});
