//import React from 'react';

const ScoreCard = ({ id, teamName, members, score, onUpdateScore }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg hover:border-blue-500 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400">{teamName}</h3>
        <span className="text-3xl font-black text-yellow-400">{score}</span>
      </div>
      
      <div className="text-slate-400 text-sm mb-6 flex flex-col items-start">
        <p className="pb-3">👥 조원</p>
        <div className="flex flex-wrap gap-2">
          {members.map((m, idx) => (
            <span key={idx} className="bg-slate-700 px-2 py-1 rounded text-xs">{m}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => onUpdateScore(id, 5)}
          className="flex-1 bg-slate-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
        >
          + 5
        </button>
        <button 
          onClick={() => onUpdateScore(id, 10)}
          className="flex-1 bg-slate-600 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
        >
          + 10
        </button>
        <button 
          onClick={() => onUpdateScore(id, -10)}
          className="flex-1 bg-red-700 hover:bg-red-500 text-white font-bold py-2 rounded-lg transition-colors cursor-pointer"
        >
          - 10
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;