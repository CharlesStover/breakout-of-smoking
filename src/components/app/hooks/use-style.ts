import React, { CSSProperties } from 'react';
import { GAME_ASPECT_RATIO } from '../constants';

export default function useStyle(screenWidth: number): CSSProperties {
  return React.useMemo(
    (): CSSProperties => ({
      maxHeight: `${Math.ceil(screenWidth / GAME_ASPECT_RATIO)}px`,
      minHeight: `${Math.ceil(screenWidth / GAME_ASPECT_RATIO)}px`,
      maxWidth: `${screenWidth}px`,
      minWidth: `${screenWidth}px`,
    }),
    [screenWidth],
  );
}
