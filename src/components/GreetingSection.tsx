import React from 'react';
import { useGreeting } from '../hooks/useGreeting';

interface GreetingSectionProps {
  currentTime: Date;
}

const GreetingSection: React.FC<GreetingSectionProps> = ({ currentTime }) => {
  const greeting = useGreeting(currentTime);

  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
        {greeting}, Devanshi!
      </h1>
    </div>
  );
};

export default GreetingSection;