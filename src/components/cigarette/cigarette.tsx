import React, { ReactElement } from 'react';
import './cigarette.css';

interface Props {
  left: number;
}

export default function Cigarette({ left }: Props): ReactElement {
  return (
    <div className="cigarette" style={{ left }}>
      <div className="butt" />
      <div className="lit" />
    </div>
  );
}
