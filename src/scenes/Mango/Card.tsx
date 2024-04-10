import React, { useState } from 'react';
import check from '@/assets/check.png';

type CardProps = {
  defaultText: string;
  hoverText: string;
};

const Card: React.FC<CardProps> = ({ defaultText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border border-gray-100 rounded-lg shadow transition-all hover:shadow-md p-4 hover:border-primary-500 flex items-center justify-center h-48"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col items-center justify-center h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-gray-700 text-lg">
          {defaultText}
        </p>
      </div>
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-gray-700 text-lg font-semibold">
          {hoverText}
        </p>
      </div>
      <img
        src={check}
        alt="Icon"
        className={`absolute bottom-0 right-0 w-12 h-12 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} // Adjust size as necessary
        style={{ maxWidth: '25%', maxHeight: '25%' }} 
      />
    </div>
  );
};

export default Card;
