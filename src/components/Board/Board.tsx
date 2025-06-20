import './Board.css';

const Board = ({
    squares,
    handleClick,
    gameOver
}: {
    squares: string[],
    handleClick: (i: number) => void,
    gameOver: boolean
}) => {
    return (
        <div className={`board ${gameOver ? 'disabled' : ''}`}>
            {squares.map((square, i) => (
                <button key={i} className={`square ${square ? 'filled' : ''}`} onClick={() => handleClick(i)}>
                    <span key={i} className='square-text'>{square}</span>
                </button>
            ))}
        </div>
    )
}

export default Board;