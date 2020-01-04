import React, { ReactElement, CSSProperties } from 'react';
import './cigarette.css';

interface Props {
  left: number;
  width: number;
}

export default function Cigarette({ left, width }: Props): ReactElement {
  const style: CSSProperties = React.useMemo(
    (): CSSProperties => ({
      left: `${left}px`,
      width: `${width}px`,
    }),
    [left, width],
  );

  return (
    <div className="cigarette" style={style}>
      <div className="butt" />
      <div className="lit" />
    </div>
  );
}
