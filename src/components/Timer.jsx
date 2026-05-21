import { useState, useEffect } from 'react';

const Timer = ({ initialSeconds = 120 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      alert("시간이 종료되었습니다! 🔔");
      //setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="bg-slate-900 border-2 border-blue-500 rounded-3xl p-8 text-center w-full max-w-sm mx-auto">
      <h2 className="text-slate-400 text-lg font-semibold mb-2">REMAINING TIME</h2>
      <div className={`text-6xl font-mono font-black mb-6 ${seconds <= 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
        {formatTime(seconds)}
      </div>
      <div className="flex gap-4">
        <button 
          onClick={() => setIsActive(!isActive)}
          className={`flex-1 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-red-500/20 text-red-500 border border-red-500' : 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'}`}
        >
          {isActive ? 'PAUSE' : 'START'}
        </button>
        <button 
          onClick={() => { setSeconds(initialSeconds); setIsActive(false); }}
          className="bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-600"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Timer;