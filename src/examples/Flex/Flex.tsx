import { useState } from 'react';
import './style.css';

function Flex() {
  const [direction, setDirection] = useState('');

  return (
    <>
      <div className={`flex w-[100%] p-10 ${direction}`}>
        <div className="bg-red-600 w-10 h-10"></div>
        <div className="bg-green-600 w-10 h-10"></div>
        <div className="bg-blue-600 w-10 h-10"></div>
      </div>
      <div className="flex justify-between">
        <div className="p-10">
          <div>flex-direction:</div>
          <button
            className="p-10 border border-solid border-1 border-green-600"
            onClick={() =>
              setDirection(direction === 'flex-row' ? 'flex-col' : 'flex-row')
            }
          >
            {direction === 'flex-row' ? 'row' : 'column'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Flex;
