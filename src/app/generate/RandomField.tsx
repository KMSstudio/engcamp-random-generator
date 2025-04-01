'use client';

import { useState } from 'react';
import './generate.css';

export default function RandomArea() {
  const [num, setNum] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);

  const regenerate = () => {
    const parsedNum = parseInt(num);
    const parsedStart = parseInt(start);
    const parsedEnd = parseInt(end);
    if ( isNaN(parsedNum) || isNaN(parsedStart) || isNaN(parsedEnd) || parsedEnd < parsedStart || parsedNum <= 0 ) return;

    let candidates: number[] = [];
    const result: number[] = [];

    while (result.length < parsedNum) {
      // If length of candidate is 0, refill it.
      if (candidates.length === 0) { candidates = Array.from({ length: parsedEnd - parsedStart + 1 }, (_, i) => parsedStart + i); }

      // Pick random index
      const idx = Math.floor(Math.random() * candidates.length);
      const selected = candidates[idx];
      result.push(selected);
      // Remove selected item from candidate pool
      candidates.splice(idx, 1);
    }

    setNumbers(result);
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
          <input type="range" min={1} max={30} value={num} onChange={(e) => setNum(e.target.value)} />
          <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
        </div>

        <div className="slider-group">
          <label>Range:</label>
          <input type="number" value={start} onChange={(e) => setStart(e.target.value)} />
          <span>~</span>
          <input type="number" value={end} onChange={(e) => setEnd(e.target.value)} />
        </div>

        <div className="button-group">
          <button onClick={regenerate}>Regenerate</button>
          <button onClick={() => setNumbers([])}>Clear</button>
        </div>
      </div>
    </>
  );
}