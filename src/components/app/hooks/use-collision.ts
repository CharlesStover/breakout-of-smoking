import React, { Dispatch, SetStateAction } from 'react';

interface Params {
  grid: boolean[][];
  gridTop: number;
  paddleLeft: number;
  paddleTop: number;
  paddleWidth: number;
  setGrid: Dispatch<SetStateAction<boolean[][]>>;
  setSmokeAngle: Dispatch<SetStateAction<number>>;
  setSmokeLeft: Dispatch<SetStateAction<number>>;
  setSmokeTop: Dispatch<SetStateAction<number>>;
  smokeAngle: number;
  smokeLeft: number;
  smokeTop: number;
}

export default function useCollision({
  grid,
  gridTop,
  paddleLeft,
  paddleTop,
  paddleWidth,
  setGrid,
  setSmokeAngle,
  setSmokeLeft,
  setSmokeTop,
  smokeAngle,
  smokeLeft,
  smokeTop,
}: Params): void {
  const handleCollision = React.useCallback(
    (x: number, y: number): void => {
      setGrid((grid: boolean[][]): boolean[][] => [
        ...grid.slice(0, y - 1),
        [
          ...grid[y].slice(0, x - 1),
          false,
          ...grid[y].slice(x, grid[y].length),
        ],
        ...grid.slice(y, grid.length),
      ]);
    },
    [setGrid],
  );
}
