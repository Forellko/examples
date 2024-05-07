import { useEffect, useRef, useState } from 'react';
import './style.css';

interface IBlock {
  color: string;
}

function Flex() {
  const [blocks, setBlocks] = useState<IBlock[]>([
    { color: '#ff0000' },
    { color: '#00ff00' },
    { color: '#0000ff' },
  ]);
  const [color, setColor] = useState('#000000');
  const [direction, setDirection] = useState('flex-row');
  const [justifyContent, setJustifyContent] = useState('justify-start');
  const [alignItems, setAlignItems] = useState('items-start');
  const [width, setWidth] = useState('50');
  const [height, setHeight] = useState('200');
  const [wrap, setWrap] = useState('flex-nowrap');
  const flexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flexRef.current) return;
    flexRef.current.style.width = width + '%';
    flexRef.current.style.height = height + 'px';
  }, [width, height]);

  return (
    <>
      {/* Blocks */}
      <div
        ref={flexRef}
        className={`flex gap-2 w-[100%] p-10 bg-slate-300 ${direction} ${justifyContent} ${alignItems} ${wrap}`}
      >
        {blocks.map((el, index) => (
          <div
            key={index}
            className={`w-10 h-10`}
            style={{ backgroundColor: el.color }}
            onClick={() => {
              setBlocks(blocks.filter((e, ind) => ind !== index));
            }}
          ></div>
        ))}
      </div>
      {/* Settings */}
      <div className="flex justify-between">
        {/* width and height */}
        <div className="p-10">
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
        {/* add element */}
        <div className="flex flex-col p-10">
          <h2>Add block:</h2>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button
            className="border-solid border-2 border-green-500"
            onClick={(e) => {
              setBlocks([...blocks, { color: color }]);
            }}
          >
            Create
          </button>
        </div>

        {/* flex direction */}
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
        {/* justify content */}
        <div className="flex flex-col p-10">
          <h2>justify-content:</h2>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              justifyContent === 'justify-start' && 'bg-green-300'
            }`}
            onClick={() => setJustifyContent('justify-start')}
          >
            flex-start
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              justifyContent === 'justify-center' && 'bg-green-300'
            }`}
            onClick={() => setJustifyContent('justify-center')}
          >
            center
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              justifyContent === 'justify-end' && 'bg-green-300'
            }`}
            onClick={() => setJustifyContent('justify-end')}
          >
            flex-end
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600  ${
              justifyContent === 'justify-between' && 'bg-green-300'
            }`}
            onClick={() => setJustifyContent('justify-between')}
          >
            space-between
          </button>
        </div>
        {/* align items */}
        <div className="flex flex-col p-10">
          <h2>align-items: </h2>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              alignItems === 'items-start' && 'bg-green-300'
            }`}
            onClick={() => setAlignItems('items-start')}
          >
            flex-start
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              alignItems === 'items-center' && 'bg-green-300'
            }`}
            onClick={() => setAlignItems('items-center')}
          >
            center
          </button>

          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              alignItems === 'items-end' && 'bg-green-300'
            }`}
            onClick={() => setAlignItems('items-end')}
          >
            flex-end
          </button>
        </div>
        {/* flex wrap */}
        <div className="flex flex-col p-10">
          <h2>flex-wrap:</h2>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              wrap === 'flex-nowrap' && 'bg-green-300'
            }`}
            onClick={() => {
              setWrap('flex-nowrap');
            }}
          >
            nowrap
          </button>
          <button
            className={`p-10 border border-solid border-1 border-green-600 ${
              wrap === 'flex-wrap' && 'bg-green-300'
            }`}
            onClick={() => {
              setWrap('flex-wrap');
            }}
          >
            wrap
          </button>
        </div>
      </div>
    </>
  );
}

export default Flex;
