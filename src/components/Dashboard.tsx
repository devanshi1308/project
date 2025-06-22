import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import GreetingSection from './GreetingSection';
import QuickActions from './QuickActions';
import InfoCards from './InfoCards';

export type ActiveTab = 'home' | 'music' | 'calendar' | 'lighting' | 'more';

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [musicPlayerState, setMusicPlayerState] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 180,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlayMusic = () => {
    setMusicPlayerState((prev) => ({
      ...prev,
      isPlaying: true,
    }));
    setActiveTab('music');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <GreetingSection currentTime={currentTime} />
            <QuickActions onPlayMusic={handlePlayMusic} />
            <InfoCards
              currentTime={currentTime}
              musicPlayerState={musicPlayerState}
              setMusicPlayerState={setMusicPlayerState}
            />
          </>
        );
      case 'music':
        return (
          <MusicView
            musicPlayerState={musicPlayerState}
            setMusicPlayerState={setMusicPlayerState}
          />
        );
      case 'calendar':
        return <CalendarView />;
      case 'lighting':
        return <LightingView />;
      default:
        return (
          <>
            <GreetingSection currentTime={currentTime} />
            <QuickActions onPlayMusic={handlePlayMusic} />
            <InfoCards
              currentTime={currentTime}
              musicPlayerState={musicPlayerState}
              setMusicPlayerState={setMusicPlayerState}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="transition-all duration-300 ease-in-out">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
