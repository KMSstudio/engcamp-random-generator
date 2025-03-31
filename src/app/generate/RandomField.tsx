'use client';

import { useState } from 'react';
import './generate.css';

interface Props {
  initialNum: number;
  initialStart: number;
  initialEnd: number;
  initialNumbers: number[];
}

export default function RandomArea({
  initialNum,
  initialStart,
  initialEnd,
  initialNumbers,
}: Props) {
  const [num, setNum] = useState(initialNum);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  const [numbers, setNumbers] = useState(initialNumbers);

  const regenerate = () => {
    const newNumbers = Array.from({ length: num }, () =>
      Math.floor(Math.random() * (end - start + 1)) + start
    );
    setNumbers(newNumbers);
  };

  return (
    <>
      <div className="main-area">
        <div className="background" />
        <div className="label-container">
          <div className="label">
            {numbers.map((n, i) => (
              <div className="number" key={i}>{n}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="control-area">
        <div className="slider-group">
          <label>Num:</label>
          <input type="range" min={1} max={30} value={num} onChange={(e) => setNum(Number(e.target.value))} />
          <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        </div>

        <div className="slider-group">
          <label>Range:</label>
          <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} />
          <span>~</span>
          <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} />
        </div>

        <button onClick={regenerate}>Regenerate</button>
      </div>
    </>
  );
}