import React from 'react';
import RotatingCylinder from './RotatingCylinder'; // Make sure to adjust the path

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <RotatingCylinder /> {/* Add the RotatingCylinder component here */}
      <h2 className="text-lg font-semibold">Card Title</h2>
      <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
