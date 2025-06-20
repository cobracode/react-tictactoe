import { useState } from "react";
import { INITIAL_SQUARES } from "../constants/gameConstants";

export const useGameLogic = () => {
    const [squares, setSquares] = useState<string[]>(INITIAL_SQUARES);
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    const handleClick = (i: number) => {
        const boardCopy = [...squares];
        if (boardCopy[i] || calculateWinner(boardCopy)) {
            return;
        }
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setSquares(boardCopy);
        setXIsNext(!xIsNext);
    }

    const calculateWinner = (board: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }

    return { squares, xIsNext, handleClick };
}