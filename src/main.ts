import { Day } from './day';
import day0 from "./day/day0";
import day1 from "./day/day1";

const days: Day[] = [
  day0,
  day1
];

async function runDay(dayId: number) {
  const resultPart1 = await days[dayId].partOne().catch(() => "Something went wrong!");
  console.log("Part 1 result:");
  console.log(resultPart1);

  console.log("=".repeat(40) + "\n\n");

  const resultPart2 = await days[dayId].partTwo().catch(() => "Something went wrong!");
  console.log("Part 2 result:");
  console.log(resultPart2);
}

export {days, runDay}
