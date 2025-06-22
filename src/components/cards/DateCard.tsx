import React from 'react';

interface DateCardProps {
  currentTime: Date;
}

const DateCard: React.FC<DateCardProps> = ({ currentTime }) => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 h-full hover:bg-white/25 transition-all duration-300">
      <h3 className="text-white/80 font-medium mb-4">Today's date</h3>
      <div className="text-white">
        <div className="text-2xl font-bold mb-1">
          {formatDate(currentTime)}
        </div>
        <div className="text-white/80">
          {getDayName(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default DateCard;