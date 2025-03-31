'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import './generate.css';

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // 실제로 적용되는 값
  const [num, setNum] = useState<number>(Number(searchParams.get('num')) || 1);
  const [start, setStart] = useState<number>(Number(searchParams.get('start')) || 1);
  const [end, setEnd] = useState<number>(Number(searchParams.get('end')) || 10);

  // 입력 중인 임시 값
  const [tempNum, setTempNum] = useState(num);
  const [tempStart, setTempStart] = useState(start);
  const [tempEnd, setTempEnd] = useState(end);

  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const newNumbers: number[] = [];
    for (let i = 0; i < num; i++) {
      newNumbers.push(Math.floor(Math.random() * (end - start + 1)) + start);
    }
    setNumbers(newNumbers);
  }, [num, start, end]);

  const handleRegenerate = () => {
    setNum(tempNum);
    setStart(tempStart);
    setEnd(tempEnd);

    const params = new URLSearchParams();
    params.set('num', String(tempNum));
    params.set('start', String(tempStart));
    params.set('end', String(tempEnd));
    router.push(`/generate?${params.toString()}`);
  };

  return (
    <div className="generate-page">
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
          <label>Num (1~30):</label>
          <input
            type="range"
            min={1}
            max={30}
            value={tempNum}
            onChange={(e) => setTempNum(Number(e.target.value))}
          />
          <input
            type="number"
            min={1}
            max={30}
            value={tempNum}
            onChange={(e) => setTempNum(Number(e.target.value))}
          />
        </div>

        <div className="slider-group">
          <label>Range:</label>
          <input
            type="number"
            value={tempStart}
            onChange={(e) => setTempStart(Number(e.target.value))}
          />
          <span>~</span>
          <input
            type="number"
            value={tempEnd}
            onChange={(e) => setTempEnd(Number(e.target.value))}
          />
        </div>

        <button onClick={handleRegenerate}>Regenerate</button>
      </div>
    </div>
  );
}