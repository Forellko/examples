import { useEffect, useRef, useState } from 'react';
import './style.css';

function Flex() {
  const [direction, setDirection] = useState('flex-row');
  const flexRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!flexRef.current) return;
  }, []);

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
            <input type="range" name="width" id="range-width" />
            <input type="range" name="height" id="range-height" />
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
