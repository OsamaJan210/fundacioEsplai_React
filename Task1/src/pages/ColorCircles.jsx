import React, { useState } from 'react';

const ColorCircles = () => {
  const numberOfCircles = 6;

  const initialColors = Array(numberOfCircles).fill('bg-gray-400');

  const [circleColors, setCircleColors] = useState(initialColors);

  const toggleColor = (index) => {
    setCircleColors((prev) =>
      prev.map((color, i) =>
        i === index ? (color === 'bg-blue-500' ? 'bg-yellow-500' : 'bg-blue-500') : color
      )
    );
  };

  const makeAllRed = () => {
    setCircleColors(Array(numberOfCircles).fill('bg-red-500'));
  };

  const resetColors = () => {
    setCircleColors(initialColors);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <div className="flex flex-wrap justify-center gap-6">
        {circleColors.map((color, index) => (
          <div
            key={index}
            className={`w-20 h-20 rounded-full cursor-pointer transition-all duration-300 ${color} shadow-md`}
            onClick={() => toggleColor(index)}
          ></div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={makeAllRed}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
        >
          Make All Red
        </button>
        <button
          onClick={resetColors}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default ColorCircles;
