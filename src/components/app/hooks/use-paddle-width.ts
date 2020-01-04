import React from 'react';
import { DEFAULT_GRID, reduceGridToBlips } from '../utils';

const BUTT_WIDTH = 16;
const DEFAULT_GRID_BLIPS: number = DEFAULT_GRID.reduce(reduceGridToBlips, 0);
const MAX_PADDLE_WIDTH = 64;

export default function usePaddleWidth(grid: boolean[][]): number {
  return React.useMemo((): number => {
    return (
      BUTT_WIDTH +
      (grid.reduce(reduceGridToBlips, 0) / DEFAULT_GRID_BLIPS) *
        (MAX_PADDLE_WIDTH - BUTT_WIDTH)
    );
  }, [grid]);
}
