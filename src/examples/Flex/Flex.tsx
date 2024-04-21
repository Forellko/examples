import { useEffect, useRef, useState } from 'react';
import './style.css';

function Flex() {
  const [direction, setDirection] = useState('flex-row');
  const [width, setWidth] = useState('20');
  const [height, setHeight] = useState('100');
  const flexRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!flexRef.current) return;
    flexRef.current.style.width = width + '%';
    flexRef.current.style.height = height + 'px';
  }, [width, height]);

  return (
    <>
      <div
        ref={flexRef}
        className={`flex gap-2 w-[100%] p-10 bg-slate-300 ${direction}`}
      >
        <div className="bg-red-600 w-10 h-10"></div>
        <div className="bg-green-600 w-10 h-10"></div>
        <div className="bg-blue-600 w-10 h-10"></div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <div>width</div>
            <input
              type="range"
              name="width"
              id="range-width"
              onChange={(e) => setWidth(e.target.value)}
              value={width}
              min={20}
              max={100}
            />
            <div>height</div>
            <input
              type="range"
              name="height"
              id="range-height"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              min={100}
              max={300}
            />
          </div>
        </div>
        <div className="flex flex-col p-10">
          <h2>flex-direction:</h2>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              direction === 'flex-row' && 'bg-green-300'
            }`}
            onClick={() => setDirection('flex-row')}
          >
            row
          </button>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              direction === 'flex-col' && 'bg-green-300'
            }`}
            onClick={() => setDirection('flex-col')}
          >
            column
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              direction === 'flex-row-reverse' && 'bg-green-300'
            }`}
            onClick={() => setDirection('flex-row-reverse')}
          >
            row-reverse
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              direction === 'flex-col-reverse' && 'bg-green-300'
            }`}
            onClick={() => setDirection('flex-col-reverse')}
          >
            column-reverse
          </button>
        </div>
      </div>
    </>
  );
}

export default Flex;
