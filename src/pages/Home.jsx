//import React from 'react';

const Home = () => {
  const schedule = [
    { time: "~ 17:30", activity: "숙소 도착 및 조 편성" },
    { time: "17:30", activity: "아이스브레이킹 및 실내 게임" },
    { time: "19:30", activity: "바비큐 파티 🍖" },
    { time: "21:00", activity: "본격 레크리에이션" },
    { time: "23:00", activity: "자유 시간 및 친목 도모" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-a4">
      <div className="text-center mb-16">
        <div className="text-4xl text-white mb-4 animate-bounce">
          2026 광운대학교 멋쟁이사자처럼 MT
        </div>
        <p className="text-slate-400 text-xl font-medium">
          
        </p>
      </div>

      <div className="w-full max-w-2xl bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
        <h3 className="text-2xl font-bold text-blue-400 mb-8 border-b border-slate-700 pb-4">
          📅 MT 타임라인
        </h3>
        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 group">
              <span className="text-blue-500 text-2xl font-bold w-30">{item.time}</span>
              <div className="h-2 w-2 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></div>
              <span className="text-slate-200 text-lg group-hover:text-white transition-colors">{item.activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;