import './App.css'
import Board from './components/Board'
import { useGameLogic } from './hooks/useGameLogic'

function App() {
  const { squares, handleClick } = useGameLogic();

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} handleClick={handleClick} />
    </div>
  )
}

export default App
