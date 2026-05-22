//import  { useState } from 'react';
import Timer from '../components/Timer';
//import { quizData } from '../data/quizData';
// const quizData = [
//   { emojis: "🪦 🌲 👹 🦊", answer: "파묘" },
//   { emojis: "🧠 🟡 🔵 🔴", answer: "인사이드 아웃 2" },
//   { emojis: "👨 🪒 💇‍♂️ ✈️", answer: "파일럿" },
//   { emojis: "🥊 👮‍♂️ 🕵️‍♂️ 🚔", answer: "범죄도시 4" },
// ];

const GameMain = () => {
  //const [currentQuiz, setCurrentQuiz] = useState(0);
  //const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="py-12 px-6 items-center">
<div className="lg:col-span-1">
          <Timer initialSeconds={180} />
        </div>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* 타이머 섹션 */}
        
          {/* <div className="mt-6 p-4 bg-slate-800 rounded-2xl border border-slate-700 text-sm text-slate-400">
            <h4 className="font-bold text-white mb-2">📢 게임 가이드</h4>
            <ul className="list-disc ml-4 space-y-1">
              <li>제한 시간 내에 정답을 맞춰야 합니다.</li>
              <li>정답을 맞춘 팀은 +10점!</li>
              <li>중복 정답은 인정되지 않습니다.</li>
            </ul>
          </div> */}
        

        {/* 퀴즈 섹션 */}
        {/* <div className="lg:col-span-2 bg-slate-900 border-2 border-slate-800 rounded-3xl p-10 flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 text-slate-700 font-black text-6xl italic">
            Q{currentQuiz + 1}
          </div>

          <h3 className="text-xl font-bold text-blue-400 mb-8 self-start">EMOJI QUIZ</h3>
          
          <div className="text-8xl mb-12 drop-shadow-lg">
            {quizData[currentQuiz].emojis}
          </div>

          <div className={`text-4xl font-black mb-12 transition-all duration-500 ${showAnswer ? 'text-yellow-400 scale-110 opacity-100' : 'opacity-0 scale-50'}`}>
             {quizData[currentQuiz].answer}
          </div>

          <div className="flex gap-4 w-full">
            <button 
              onClick={() => setShowAnswer(!showAnswer)}
              className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black py-4 rounded-2xl transition-all"
            >
              {showAnswer ? "정답 숨기기" : "정답 확인하기"}
            </button>
            <button 
              onClick={() => {
                setCurrentQuiz((prev) => (prev + 1) % quizData.length);
                setShowAnswer(false);
              }}
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-2xl font-bold"
            >
              다음 문제
            </button>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default GameMain;