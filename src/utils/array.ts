// Split array into chunks of provided size.
// https://stackoverflow.com/questions/8495687/split-array-into-chunks/24782004#24782004
export function chunk<T>(array: T[], chunkSize: number): T[][] {
  const R = [];
  for (let i = 0, len = array.length; i < len; i += chunkSize) {
    R.push(array.slice(i, i + chunkSize));
  }
  return R;
}
