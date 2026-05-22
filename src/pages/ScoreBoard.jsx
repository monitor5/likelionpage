//import React from 'react';
import ScoreCard from '../components/ScoreCard';

const Scoreboard = ({ teams, onUpdateScore }) => {
  return (
    <div className="py-10 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div className='flex flex-col'>
          <div className="text-3xl font-black text-white pl-2 mb-2">실시간 점수표</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {teams.map((team) => (
          <ScoreCard 
            key={team.id}
            id={team.id}
            teamName={team.name}
            members={team.members}
            score={team.score}
            onUpdateScore={onUpdateScore}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;