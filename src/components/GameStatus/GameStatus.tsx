const GameStatus = ({ status }: { status: string }) => {
    return (
        <div className='game-status'>
            {status}
        </div>
    )
}

export default GameStatus;