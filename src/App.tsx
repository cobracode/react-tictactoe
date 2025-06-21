import './App.css'
import Board from './components/Board/Board'
import GameStatus from './components/GameStatus/GameStatus'
import { useGameLogic } from './hooks/useGameLogic'

function App() {
  const { squares, handleClick, getStatus } = useGameLogic();

  const { status, gameOver } = getStatus();

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <GameStatus status={status} />
      <Board squares={squares} handleClick={handleClick} gameOver={gameOver} />
    </div>
  )
}

export default App;
