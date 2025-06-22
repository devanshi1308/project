import React, { useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

interface MusicPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

interface MusicCardProps {
  musicPlayerState: MusicPlayerState;
  setMusicPlayerState: React.Dispatch<React.SetStateAction<MusicPlayerState>>;
}

const MusicCard: React.FC<MusicCardProps> = ({ musicPlayerState, setMusicPlayerState }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [currentTrack] = React.useState({
    title: 'In the Abyss Englufed',
    artist: 'Unknown Artist'
  });

  useEffect(() => {
    if (musicPlayerState.isPlaying) {
      intervalRef.current = setInterval(() => {
        setMusicPlayerState(prev => {
          if (prev.currentTime >= prev.duration) {
            return { ...prev, isPlaying: false, currentTime: 0 };
          }
          return { ...prev, currentTime: prev.currentTime + 1 };
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [musicPlayerState.isPlaying, setMusicPlayerState]);

  const togglePlayPause = () => {
    setMusicPlayerState(prev => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const skipBack = () => {
    setMusicPlayerState(prev => ({ 
      ...prev, 
      currentTime: Math.max(0, prev.currentTime - 10) 
    }));
  };

  const skipForward = () => {
    setMusicPlayerState(prev => ({ 
      ...prev, 
      currentTime: Math.min(prev.duration, prev.currentTime + 10) 
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (musicPlayerState.currentTime / musicPlayerState.duration) * 100;

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full hover:bg-white/25 transition-all duration-300">
      <div className="text-center">
        <h3 className="text-white font-medium mb-2 text-base sm:text-lg">
          {currentTrack.title}
        </h3>
        <div className="text-white/60 text-xs sm:text-sm mb-4">
          {currentTrack.artist}
        </div>
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
          <button 
            onClick={skipBack}
            className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-300"
          >
            <SkipBack className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="p-2.5 sm:p-3 bg-white/30 hover:bg-white/40 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            {musicPlayerState.isPlaying ? (
              <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>
          
          <button 
            onClick={skipForward}
            className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all duration-300"
          >
            <SkipForward className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
        </div>
        
        <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 mb-3">
          <div 
            className="bg-white h-1.5 sm:h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-white/60 text-xs sm:text-sm">
          <span>{formatTime(musicPlayerState.currentTime)}</span>
          <span>{formatTime(musicPlayerState.duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;