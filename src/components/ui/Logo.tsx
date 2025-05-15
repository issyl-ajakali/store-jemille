import React from 'react';
import { Utensils } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="bg-yellow-500 rounded-full p-3 mb-1">
        <Utensils className="text-red-800" size={24} />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold text-white tracking-wider">MIILEBITES</h1>
        <p className="text-xs text-yellow-200 italic">SAVOR THE FLAVOR, BITE BY BITE!</p>
      </div>
    </div>
  );
};

export default Logo;