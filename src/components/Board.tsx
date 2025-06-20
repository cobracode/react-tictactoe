import './Board.css';

const Board = ({ squares, handleClick }: { squares: string[], handleClick: (i: number) => void }) => {
    return (
        <div className='board'>
            {squares.map((square, i) => (
                <button className='square' onClick={() => handleClick(i)}>
                    <span className='square-text'>{square}</span>
                </button>
            ))}
        </div>
    )
}

export default Board;