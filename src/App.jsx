import React from 'react';
import ColorCircles from './pages/ColorCircles';
import Excersice2 from './pages/Excersice2';
import Login from './pages/Login';
import Calculator from './pages/Calculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Exercise 1: Color Circles</h1>

      <div className="text-lg font-semibold text-blue-600 mb-2 mt-6">Task 1</div>
      <ColorCircles />

      <div className="text-lg font-semibold text-blue-600 mb-2 mt-6">Task 2</div>
      <Excersice2 />

      <div className="text-lg font-semibold text-blue-600 mb-2 mt-6">Task 4</div>
      <Calculator />

      <div className="text-lg font-semibold text-blue-600 mb-2 mt-6">Task 5</div>
      <Login />
    </div>
  );
}

export default App;
