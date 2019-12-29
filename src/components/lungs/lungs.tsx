import React, { ReactElement } from 'react';
import { Block } from '..';
import './lungs.css';

interface Props {
  grid: boolean[][];
}

export default function Lungs({ grid }: Props): ReactElement {
  return (
    <div className="lungs">
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
