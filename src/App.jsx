import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Scoreboard from './pages/ScoreBoard'
import GameMain from './pages/GameMain'

function App() {
  // 1. 페이지 상태 관리
  const [page, setPage] = useState('home');

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* 2. Navbar에 함수와 상태 전달 */}
      <Navbar setPage={setPage} currentPage={page} />

      <main className="max-w-7xl mx-auto">
        {/* 3. 조건부 렌더링 */}
        {page === 'home' && <Home />}
        {page === 'scoreboard' && <Scoreboard />}
        {page === 'games' && <GameMain />}
      </main>
    </div>
  );
}

export default App;