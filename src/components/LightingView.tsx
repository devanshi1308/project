import React, { useState } from 'react';
import { Lightbulb, Sun, Moon, Zap } from 'lucide-react';

const LightingView: React.FC = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Living Room', isOn: true, brightness: 80, color: 'warm' },
    { id: 2, name: 'Bedroom', isOn: false, brightness: 60, color: 'cool' },
    { id: 3, name: 'Kitchen', isOn: true, brightness: 100, color: 'bright' },
    { id: 4, name: 'Bathroom', isOn: false, brightness: 40, color: 'warm' }
  ]);

  const toggleRoom = (id: number) => {
    setRooms(rooms.map(room => 
      room.id === id ? { ...room, isOn: !room.isOn } : room
    ));
  };

  const setBrightness = (id: number, brightness: number) => {
    setRooms(rooms.map(room => 
      room.id === id ? { ...room, brightness } : room
    ));
  };

  return (
    <div className="space-y-6 sm:space-y-8 px-2">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          Smart Lighting
        </h1>
        <p className="text-white/80 text-lg">Control your home lighting</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{room.name}</h3>
              <button
                onClick={() => toggleRoom(room.id)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  room.isOn 
                    ? 'bg-yellow-400/30 text-yellow-200' 
                    : 'bg-white/20 text-white/60'
                }`}
              >
                <Lightbulb className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-white/80">
                <span>Status</span>
                <span className={room.isOn ? 'text-green-300' : 'text-red-300'}>
                  {room.isOn ? 'On' : 'Off'}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-white/80">
                  <span>Brightness</span>
                  <span>{room.brightness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={room.brightness}
                  onChange={(e) => setBrightness(room.id, parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  disabled={!room.isOn}
                />
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 p-2 bg-orange-400/20 text-orange-200 rounded-lg text-sm hover:bg-orange-400/30 transition-all duration-300">
                  <Sun className="w-4 h-4 mx-auto" />
                </button>
                <button className="flex-1 p-2 bg-blue-400/20 text-blue-200 rounded-lg text-sm hover:bg-blue-400/30 transition-all duration-300">
                  <Moon className="w-4 h-4 mx-auto" />
                </button>
                <button className="flex-1 p-2 bg-white/20 text-white rounded-lg text-sm hover:bg-white/30 transition-all duration-300">
                  <Zap className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Quick Controls</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 text-white">
            All On
          </button>
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 text-white">
            All Off
          </button>
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 text-white">
            Movie Mode
          </button>
          <button className="p-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-300 text-white">
            Sleep Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightingView;