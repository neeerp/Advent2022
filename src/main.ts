import { Day } from './day';
import day0 from "./day/day0";

const days: Day[] = [
  day0,
];

async function runDay(dayId: number) {
  const resultPart1 = await days[dayId].partOne();
  console.log("Part 1 result:");
  console.log(resultPart1);

  console.log("=".repeat(40) + "\n\n");

  const resultPart2 = await days[dayId].partTwo();
  console.log("Part 2 result:");
  console.log(resultPart2);
}

export {days, runDay}
