import {days, runDay} from './main';

const params = process.argv.splice(2);
if (params.length) {
  runDay(parseInt(params[0], 10));
} else {
  console.log('Usage: npm run cli [day]');
  console.log(`Available days: [ ${days.map((x) => x.id).join(", ")} ]`);
}
