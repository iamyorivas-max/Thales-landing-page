import React, { useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';

const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-15T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-thales-900 via-thales-700 to-thales-900 text-white py-2 px-4 relative overflow-hidden shadow-lg z-50">
      {/* Animated Shine Effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 animate-shine" />
      
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium relative z-10">
        
        {/* Label */}
        <div className="flex items-center gap-2 animate-pulse text-center sm:text-left">
          <PartyPopper size={16} className="text-yellow-400 flex-shrink-0" />
          <span className="uppercase tracking-widest font-bold text-yellow-400">
            Grand Anniversaire Thalès : 30 Ans d’Expertise
          </span>
        </div>

        <div className="hidden sm:block w-px h-4 bg-thales-500/50"></div>

        {/* Countdown */}
        <div className="flex items-center gap-3">
          <span className="opacity-90 hidden lg:inline">L'excellence continue dans :</span>
          <div className="flex items-center gap-2">
            <TimeUnit value={timeLeft.days} label="J" />
            <span className="text-thales-400 font-bold">:</span>
            <TimeUnit value={timeLeft.hours} label="H" />
            <span className="text-thales-400 font-bold">:</span>
            <TimeUnit value={timeLeft.minutes} label="M" />
            <span className="text-thales-400 font-bold">:</span>
            <TimeUnit value={timeLeft.seconds} label="S" />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 5s infinite;
        }
      `}</style>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex items-baseline gap-0.5">
    <span className="bg-white/10 px-1.5 py-0.5 rounded text-white font-mono font-bold min-w-[24px] text-center backdrop-blur-sm border border-white/10">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[10px] text-thales-300">{label}</span>
  </div>
);

export default AnnouncementBar;