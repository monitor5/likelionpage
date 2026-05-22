import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Scoreboard from './pages/ScoreBoard'
import GameMain from './pages/GameMain'
import {teamsData} from './data/teamsData'

// 초기 더미 데이터 (localStorage에 없을 때만 사용됨)
// const initialTeams = [
//   { id: 1, name: "1조: 아아", members: ["김철수", "이영희", "박민수", "최다은"], score: 0 },
//   { id: 2, name: "2조: 버그헌터", members: ["정우성", "한지민", "이정재", "김태희"], score: 0 },
//   { id: 3, name: "3조: 프론트마스터", members: ["유재석", "강호동", "신동엽", "이광수"], score: 0 },
//   { id: 4, name: "4조: 백엔드빌더", members: ["손흥민", "이강인", "김민재", "황희찬"], score: 0 },
//   { id: 5, name: "5조: 리액트장인", members: ["봉준호", "박찬욱", "김혜수", "송강호"], score: 0 },
// ];

function App() {
  const [page, setPage] = useState('home');
  
// 2. [핵심] 로컬스토리지 확인 후, 점수 데이터가 없거나 꼬였을 때만 외부 파일(teamsData)을 초기값으로 씁니다.
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem('likelion_mt_scores');
    return savedTeams ? JSON.parse(savedTeams) : teamsData;
  });

  // 3. teams 상태가 1점이라도 변경되면 브라우저 LocalStorage에 즉시 실시간 박제
  useEffect(() => {
    localStorage.setItem('likelion_mt_scores', JSON.stringify(teams));
  }, [teams]);

  // 3. 특정 팀의 점수를 변경하는 함수 정의 (ScoreCard에서 호출할 예정)
  const handleUpdateScore = (teamId, amount) => {
    setTeams(prevTeams => 
      prevTeams.map(team => 
        team.id === teamId 
          ? { ...team, score: Math.max(0, team.score + amount) } // 0점 이하로 내려가지 않게 보호
          : team
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar setPage={setPage} currentPage={page} />

      <main className="max-w-7xl mx-auto">
        {page === 'home' && <Home />}
        
        {/* Scoreboard로 상태(teams)와 점수 변경 함수(handleUpdateScore)를 넘겨줌 */}
        {page === 'scoreboard' && (
          <Scoreboard teams={teams} onUpdateScore={handleUpdateScore} />
        )}
        
        {page === 'games' && <GameMain />}
      </main>
    </div>
  );
}

export default App;