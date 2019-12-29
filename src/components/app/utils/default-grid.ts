const DEFAULT_GRID_STR: string = `
0:19,4,19
0:19,4,19
0:19,4,19
0:19,4,19
0:11,5,3,4,3,5,11
0:9,8,2,4,2,8,9
0:8,9,2,4,2,9,8
0:7,11,1,4,1,11,7
0:6,12,1,4,1,12,6
0:5,13,1,4,1,13,5
0:5,13,1,4,1,13,5
0:4,34,4
0:3,36,3
0:3,36,3
0:2,18,2,18,2
0:2,16,6,16,2
0:2,16,6,16,2
0:1,17,6,17,1
0:1,17,6,17,1
0:1,17,6,17,1
0:1,17,6,17,1
0:1,17,6,17,1
0:1,17,6,17,1
1:18,6,18
1:18,6,18
1:18,6,18
1:17,8,17
1:17,8,17
1:17,8,17
1:16,10,16
1:15,12,15
1:14,14,14
1:9,24,9
0:1,4,32,4,1
`;

const DEFAULT_GRID_ROWS_STR: string[] = DEFAULT_GRID_STR.trim().split('\n');

const DEFAULT_GRID: boolean[][] = DEFAULT_GRID_ROWS_STR.reduce(
  (grid: boolean[][], rowStr: string): boolean[][] => {
    const row: boolean[] = [];
    const [startFilled, setsStr] = rowStr.split(':');
    const sets: number[] = setsStr
      .split(',')
      .map((set: string): number => parseInt(set, 10));
    let filled = startFilled === '1';
    for (const set of sets) {
      for (let i = 0; i < set; i++) {
        row.push(filled ? true : false);
      }
      filled = !filled;
    }
    grid.push(row);
    return grid;
  },
  [],
);

export default DEFAULT_GRID;
