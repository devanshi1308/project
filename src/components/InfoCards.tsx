import React from 'react';
import WeatherCard from './cards/WeatherCard';
import DateCard from './cards/DateCard';
import VoiceCard from './cards/VoiceCard';
import ClockCard from './cards/ClockCard';
import MusicCard from './cards/MusicCard';

interface MusicPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

interface InfoCardsProps {
  currentTime: Date;
  musicPlayerState: MusicPlayerState;
  setMusicPlayerState: React.Dispatch<React.SetStateAction<MusicPlayerState>>;
}

const InfoCards: React.FC<InfoCardsProps> = ({ currentTime, musicPlayerState, setMusicPlayerState }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 px-2 pb-20 md:pb-8">
      <div className="lg:col-span-1">
        <WeatherCard />
      </div>
      <div className="lg:col-span-1">
        <DateCard currentTime={currentTime} />
      </div>
      <div className="lg:col-span-1">
        <VoiceCard />
      </div>
      <div className="lg:col-span-1">
        <ClockCard currentTime={currentTime} />
      </div>
      <div className="lg:col-span-1 xl:col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-1">
        <MusicCard 
          musicPlayerState={musicPlayerState}
          setMusicPlayerState={setMusicPlayerState}
        />
      </div>
    </div>
  );
};

export default InfoCards;