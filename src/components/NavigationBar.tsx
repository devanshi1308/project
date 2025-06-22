import React from 'react';
import { Home, Music, Calendar, Lightbulb, MoreHorizontal, Menu, User } from 'lucide-react';
import { ActiveTab } from './Dashboard';

interface NavigationBarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home' as ActiveTab, icon: Home, label: 'Home' },
    { id: 'music' as ActiveTab, icon: Music, label: 'Music' },
    { id: 'calendar' as ActiveTab, icon: Calendar, label: 'Calendar' },
    { id: 'lighting' as ActiveTab, icon: Lightbulb, label: 'Lighting' },
    { id: 'more' as ActiveTab, icon: MoreHorizontal, label: 'More' }
  ];

  return (
    <div className="flex items-center justify-between mb-6 sm:mb-8">
      <button className="p-2 sm:p-3 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl hover:bg-white/30 transition-all duration-300 md:hidden">
        <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      
      <nav className="hidden md:flex items-center bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-2 sm:py-3 gap-1 sm:gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-white/30 text-white'
                : 'text-white/80 hover:text-white hover:bg-white/20'
            }`}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden lg:inline text-sm sm:text-base">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 z-50">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-white/30 text-white'
                  : 'text-white/80 hover:text-white hover:bg-white/20'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
        <User className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default NavigationBar;