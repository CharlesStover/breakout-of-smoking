const reduceRowToBlips = (count: number, blip: boolean): number => {
  if (blip) {
    return count + 1;
  }
  return count;
};

export default function reduceGridToBlips(
  count: number,
  row: boolean[],
): number {
  return count + row.reduce(reduceRowToBlips, 0);
}
