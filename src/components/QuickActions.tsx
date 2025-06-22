import React from 'react';
import { Lightbulb, Music, Clock, Calendar } from 'lucide-react';

interface QuickActionsProps {
  onPlayMusic: () => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onPlayMusic }) => {
  const actions = [
    {
      id: 'lights',
      icon: Lightbulb,
      label: 'Turn on lights',
      action: () => console.log('Turning on lights...')
    },
    {
      id: 'music',
      icon: Music,
      label: 'Play music',
      action: onPlayMusic
    },
    {
      id: 'reminder',
      icon: Clock,
      label: 'Set a reminder',
      action: () => console.log('Setting reminder...')
    },
    {
      id: 'schedule',
      icon: Calendar,
      label: "What's my schedule?",
      action: () => console.log('Checking schedule...')
    }
  ];

  return (
    <div className="mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 px-2">Quick actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 px-2">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 text-left group"
          >
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl group-hover:bg-white/30 transition-all duration-300">
              <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-white font-medium text-base sm:text-lg">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;