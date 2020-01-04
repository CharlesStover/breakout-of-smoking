import React, { CSSProperties } from 'react';
import './smoke.css';

interface Props {
  left: number;
  top: number;
}

export default function Smoke({ left, top }: Props): JSX.Element {
  const style: CSSProperties = React.useMemo(
    (): CSSProperties => ({
      left: `${left}px`,
      top: `${top}px`,
    }),
    [left, top],
  );

  return <div className="smoke" style={style} />;
}
