import React, { CSSProperties, MutableRefObject, ReactElement } from 'react';
import './cigarette.css';

interface Props {
  left: number;
  paddleRef: MutableRefObject<HTMLDivElement | null>;
  width: number;
}

export default function Cigarette({
  left,
  paddleRef,
  width,
}: Props): ReactElement {
  const style: CSSProperties = React.useMemo(
    (): CSSProperties => ({
      left: `${left}px`,
      width: `${width}px`,
    }),
    [left, width],
  );

  return (
    <div className="cigarette" ref={paddleRef} style={style}>
      <div className="butt" />
      <div className="lit" />
    </div>
  );
}
