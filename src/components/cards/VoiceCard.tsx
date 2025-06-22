import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceRecognition } from '../../hooks/useVoiceRecognition';

const VoiceCard: React.FC = () => {
  const { isListening, transcript, startListening, stopListening } = useVoiceRecognition();

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 h-full hover:bg-white/25 transition-all duration-300">
      <h3 className="text-white/80 font-medium mb-4">Speak now</h3>
      <div className="flex flex-col items-center justify-center flex-1 min-h-[120px]">
        <button
          onClick={isListening ? stopListening : startListening}
          className={`w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center mb-4 transition-all duration-300 ${
            isListening 
              ? 'bg-red-500/30 border-red-300 animate-pulse' 
              : 'bg-white/20 hover:bg-white/30 hover:scale-110'
          }`}
        >
          {isListening ? (
            <MicOff className="w-8 h-8 text-white" />
          ) : (
            <Mic className="w-8 h-8 text-white" />
          )}
        </button>
        {transcript && (
          <p className="text-white/80 text-sm text-center leading-relaxed">
            "{transcript}"
          </p>
        )}
      </div>
    </div>
  );
};

export default VoiceCard;