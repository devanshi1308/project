import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  temperature: number;
  precipitation: number;
  humidity: number;
}

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData>({
    location: 'Mumbai',
    temperature: 23,
    precipitation: 45,
    humidity: 60
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      // In a real app, you would fetch from a weather API here
      setWeather({
        location: 'Mumbai',
        temperature: Math.floor(Math.random() * 10) + 20, // 20-30°C
        precipitation: Math.floor(Math.random() * 50) + 30, // 30-80%
        humidity: Math.floor(Math.random() * 30) + 50 // 50-80%
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { weather, loading };
};