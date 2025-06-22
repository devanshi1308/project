import React, { useState, useEffect } from 'react';
import { Cloud, Droplets } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';

const WeatherCard: React.FC = () => {
  const { weather, loading } = useWeather();

  if (loading) {
    return (
      <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 h-full animate-pulse">
        <div className="h-4 bg-white/20 rounded mb-4"></div>
        <div className="h-8 bg-white/20 rounded mb-2"></div>
        <div className="h-4 bg-white/20 rounded"></div>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 h-full hover:bg-white/25 transition-all duration-300">
      <h3 className="text-white font-medium mb-4">{weather.location}</h3>
      <div className="flex items-center gap-3 mb-4">
        <Cloud className="w-8 h-8 text-white/80" />
        <span className="text-4xl font-bold text-white">{weather.temperature}°C</span>
      </div>
      <div className="space-y-2 text-white/80 text-sm">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4" />
          <span>Precipitation: {weather.precipitation}%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 flex items-center justify-center">💧</span>
          <span>Humidity: {weather.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;