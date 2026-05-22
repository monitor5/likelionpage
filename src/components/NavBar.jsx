import Img_lion from '../assets/광운멋사로고.png'

const Navbar = ({ setPage, currentPage }) => {
  // 버튼 스타일을 공통으로 관리하는 함수
  const getBtnStyle = (pageName) => `
    px-4 py-2 rounded-lg transition-all font-medium
    ${currentPage === pageName 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
      : 'text-slate-400 hover:text-white hover:bg-slate-800'}
  `;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        {/* 로고 클릭 시 홈으로 이동 */}
        <h1 
          onClick={() => setPage('home')}
          className="flex items-center gap-7 font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          <img src={Img_lion} className='w-20'/>
          LIKELION 14th MT
        </h1>

        <div className="flex gap-7">
          {/* <button 
            onClick={() => setPage('home')} 
            className={getBtnStyle('home')}
            className="cursor-pointer"
          >
            Home
          </button> */}
          <button 
            onClick={() => setPage('scoreboard')} 
            className={getBtnStyle('scoreboard')}
            className="cursor-pointer border-2 p-3 rounded-lg text-lg w-40"
          >
            Score Board
          </button>
          <button 
            onClick={() => setPage('games')} 
            className={getBtnStyle('games')}
            className="cursor-pointer border-2 p-3 rounded-lg text-lg w-30"
          >
            Timer
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;