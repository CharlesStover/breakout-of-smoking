import React, { MutableRefObject, ReactElement } from 'react';
import { Block } from '..';
import './lungs.css';

interface Props {
  grid: boolean[][];
  gridRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Lungs({ grid, gridRef }: Props): ReactElement {
  return (
    <div className="lungs" ref={gridRef}>
      {grid.map(
        (row: boolean[], y: number): ReactElement => (
          <div className="lungs__row" key={y}>
            {row.map((block: boolean, x: number): null | ReactElement =>
              block ? (
                <Block
                  bottomLeft={false}
                  bottomRight={false}
                  key={x}
                  topLeft={false}
                  topRight={false}
                  x={x}
                  y={y}
                />
              ) : null,
            )}
          </div>
        ),
      )}
    </div>
  );
}
