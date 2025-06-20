const GameStatus = ({ status }: { status: string }) => {
    return (
        <div className='game-status'>
            <div><button onClick={() => window.location.reload()}>New Game</button></div>
            <div>{status}</div>
        </div>
    )
}

export default GameStatus;