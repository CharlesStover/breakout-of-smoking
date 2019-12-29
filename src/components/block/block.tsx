import React, { ReactElement } from 'react';
import './block.css';

interface Props {
  bottomLeft: boolean;
  bottomRight: boolean;
  topLeft: boolean;
  topRight: boolean;
  x: number;
  y: number;
}

export default React.memo(function Block({
  bottomLeft,
  bottomRight,
  topLeft,
  topRight,
  x,
  y,
}: Props): ReactElement {
  const classNames: string[] = ['block'];
  if (bottomLeft) {
    classNames.push('block__bottom-left');
  }
  if (bottomRight) {
    classNames.push('block__bottom-right');
  }
  if (topLeft) {
    classNames.push('block__top-left');
  }
  if (topRight) {
    classNames.push('block__top-right');
  }

  return (
    <div
      className="block"
      style={{
        left: `${x}em`,
        top: `${y}em`,
      }}
    />
  );
});
