import { useState } from "react";
import { INITIAL_SQUARES, PLAYERS, WINNING_COMBINATIONS } from "../constants/gameConstants";

const isBoardFull = (squares: string[]) => {
    return squares.every(square => square !== null);
};

const calculateWinner = (board: string[]) => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

export const useGameLogic = () => {
    const [squares, setSquares] = useState<string[]>(INITIAL_SQUARES);
    const [player, setPlayer] = useState<string>(PLAYERS.X);

    const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const boardCopy = [...squares];
        setSquares(boardCopy);

        boardCopy[i] = player;
        setPlayer(player === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
    }

    const getStatus = () => {
        const winner = calculateWinner(squares);
        if (winner) {
            return { status:`${winner} wins!`, gameOver: true };
        }

        if (isBoardFull(squares)) {
            return { status: 'Draw!', gameOver: true };
        }

        return { status: `${player}'s turn`, gameOver: false };
    }

    return {
        squares,
        handleClick,
        getStatus,
    };
}