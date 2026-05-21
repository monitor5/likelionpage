//import React from 'react';
import ScoreCard from '../components/ScoreCard';
import { teamsData } from '../data/teamsData';

// 실제 구현 시에는 별도 data 파일에서 import 하세요!
// const dummyTeams = [
//   { id: 1, name: "1조: 최강코딩", members: ["김철수", "이영희", "박민수", "최다은"], score: 0 },
//   { id: 2, name: "2조: 버그헌터", members: ["정우성", "한지민", "이정재", "김태희"], score: 0 },
//   { id: 3, name: "3조: 프론트마스터", members: ["유재석", "강호동", "신동엽", "이광수"], score: 0 },
//   { id: 4, name: "4조: 백엔드빌더", members: ["손흥민", "이강인", "김민재", "황희찬"], score: 0 },
//   { id: 5, name: "5조: 리액트장인", members: ["봉준호", "박찬욱", "김혜수", "송강호"], score: 0 },
// ];

const Scoreboard = () => {
  return (
    <div className="py-10 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-black text-white mb-2">LIVE SCOREBOARD</h2>
          <p className="text-slate-400">실시간으로 조별 점수를 업데이트 하세요!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamsData.map((team) => (
          <ScoreCard 
            key={team.id}
            teamName={team.name}
            members={team.members}
            initialScore={team.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;