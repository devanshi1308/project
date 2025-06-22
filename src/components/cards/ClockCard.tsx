import React from 'react';

interface ClockCardProps {
  currentTime: Date;
}

const ClockCard: React.FC<ClockCardProps> = ({ currentTime }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getSeconds = (date: Date) => {
    return date.getSeconds();
  };

  const getMinutes = (date: Date) => {
    return date.getMinutes();
  };

  const getHours = (date: Date) => {
    return date.getHours() % 12;
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 h-full hover:bg-white/25 transition-all duration-300">
      <div className="text-center">
        <div className="text-2xl font-bold text-white mb-4">
          {formatTime(currentTime)}
        </div>
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <div className="absolute inset-2 rounded-full bg-white/20"></div>
          
          {/* Hour hand */}
          <div 
            className="absolute w-0.5 bg-white rounded-full origin-bottom"
            style={{
              height: '25px',
              left: '50%',
              bottom: '50%',
              transform: `translateX(-50%) rotate(${(getHours(currentTime) * 30) + (getMinutes(currentTime) * 0.5)}deg)`,
              transformOrigin: 'bottom center'
            }}
          ></div>
          
          {/* Minute hand */}
          <div 
            className="absolute w-0.5 bg-white rounded-full origin-bottom"
            style={{
              height: '35px',
              left: '50%',
              bottom: '50%',
              transform: `translateX(-50%) rotate(${getMinutes(currentTime) * 6}deg)`,
              transformOrigin: 'bottom center'
            }}
          ></div>
          
          {/* Center dot */}
          <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ClockCard;