import './Board.css';

const Board = ({ squares, handleClick }: { squares: string[], handleClick: (i: number) => void }) => {
    return (
        <div className='board'>
            {squares.map((square, i) => (
                <button key={i} className={`square ${square ? 'filled' : ''}`} onClick={() => handleClick(i)}>
                    <span key={i} className='square-text'>{square}</span>
                </button>
            ))}
        </div>
    )
}

export default Board;