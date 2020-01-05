import React, { ReactElement, CSSProperties, MutableRefObject } from 'react';
import { useWindowEventListener } from '../../hooks';
import { Cigarette, Lungs, Smoke } from '..';
import './app.css';
import { usePaddleWidth, useStyle } from './hooks';
import { DEFAULT_GRID, getScreenWidth } from './utils';

const ARROW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;
const MIN_PADDLE_LEFT = 0;

export default function App(): ReactElement {
  const gridRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const paddleRef: MutableRefObject<HTMLDivElement | null> = React.useRef(null);

  const [grid] = React.useState<boolean[][]>(DEFAULT_GRID);
  const [keysDown, setKeysDown] = React.useState<number[]>([]);
  const [screenWidth, setScreenWidth] = React.useState<number>(getScreenWidth);
  const [smokeLeft] = React.useState<number>(0);
  const [smokeTop] = React.useState<number>(0);

  const paddleWidth: number = usePaddleWidth(grid);
  const style: CSSProperties = useStyle(screenWidth);

  const gridTop: number = React.useMemo((): number => {
    if (!gridRef.current) {
      // The value here is irrelevant. The grid's position changes based on the
      //   screenWidth due to CSS, not JavaScript. Using screenWidth here avoids
      //   the linting error.
      return screenWidth;
    }
    return gridRef.current.getBoundingClientRect().top;
  }, [gridRef, screenWidth]);

  const paddleTop: number = React.useMemo((): number => {
    if (!paddleRef.current) {
      // The value here is irrelevant. The grid's position changes based on the
      //   screenWidth due to CSS, not JavaScript. Using screenWidth here avoids
      //   the linting error.
      return screenWidth;
    }
    return paddleRef.current.getBoundingClientRect().top;
  }, [paddleRef, screenWidth]);

  /*
  const handleCollision = React.useCallback((x: number, y: number): void => {
    setGrid(grid => [
      ...grid.slice(0, y - 1),
      [...grid[y].slice(0, x - 1), false, ...grid[y].slice(x, grid[y].length)],
      ...grid.slice(y, grid.length),
    ]);
  }, []);
  */

  const handleWindowKeyDown = React.useCallback(
    (e: KeyboardEvent): void => {
      switch (e.keyCode) {
        case ARROW_LEFT_KEY_CODE: {
          if (!keysDown.includes(ARROW_LEFT_KEY_CODE)) {
            setKeysDown((keysDown: number[]): number[] =>
              keysDown.concat([ARROW_LEFT_KEY_CODE]),
            );
          }
          break;
        }

        case ARROW_RIGHT_KEY_CODE: {
          if (!keysDown.includes(ARROW_RIGHT_KEY_CODE)) {
            setKeysDown((keysDown: number[]): number[] =>
              keysDown.concat([ARROW_RIGHT_KEY_CODE]),
            );
          }
          break;
        }
      }
    },
    [keysDown],
  );

  const handleWindowKeyUp = React.useCallback(
    (e: KeyboardEvent): void => {
      switch (e.keyCode) {
        case ARROW_LEFT_KEY_CODE: {
          if (keysDown.includes(ARROW_LEFT_KEY_CODE)) {
            setKeysDown((keysDown: number[]): number[] =>
              keysDown.filter(
                (keyDown: number): boolean => keyDown !== ARROW_LEFT_KEY_CODE,
              ),
            );
          }
          break;
        }

        case ARROW_RIGHT_KEY_CODE: {
          if (keysDown.includes(ARROW_RIGHT_KEY_CODE)) {
            setKeysDown((keysDown: number[]): number[] =>
              keysDown.filter(
                (keyDown: number): boolean => keyDown !== ARROW_RIGHT_KEY_CODE,
              ),
            );
          }
          break;
        }
      }
    },
    [keysDown],
  );

  const handleWindowResize = React.useCallback((): void => {
    const newScreenWidth: number = getScreenWidth();
    if (screenWidth !== newScreenWidth) {
      setScreenWidth(newScreenWidth);
    }
  }, [screenWidth]);

  useWindowEventListener('keydown', handleWindowKeyDown);
  useWindowEventListener('keyup', handleWindowKeyUp);
  useWindowEventListener('resize', handleWindowResize);

  const [paddleLeft, setPaddleLeft] = React.useState<number>(
    (): number => Math.round(screenWidth - paddleWidth) / 2,
  );

  React.useEffect((): void | (() => void) => {
    if (keysDown.length > 0) {
      const lastKeyPressed: number = keysDown[keysDown.length - 1];
      const maxPaddleLeft: number = screenWidth - paddleWidth;
      const paddleOffset: number =
        lastKeyPressed === ARROW_LEFT_KEY_CODE ? -4 : 4;
      const interval: number = window.setInterval((): void => {
        setPaddleLeft((paddleLeft: number): number =>
          Math.max(
            MIN_PADDLE_LEFT,
            Math.min(maxPaddleLeft, paddleLeft + paddleOffset),
          ),
        );
      }, 20);
      return (): void => {
        window.clearInterval(interval);
      };
    }
  }, [keysDown, paddleWidth, screenWidth]);

  return (
    <div className="app" style={style}>
      <Lungs grid={grid} gridRef={gridRef} />
      <Cigarette left={paddleLeft} paddleRef={paddleRef} width={paddleWidth} />
      <Smoke left={smokeLeft} top={smokeTop} />
    </div>
  );
}
