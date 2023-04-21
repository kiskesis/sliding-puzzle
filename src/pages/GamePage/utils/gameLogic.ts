import { Board } from "../../../common/types";

export const generateBoard = (gridSize: number): Board => {
  const numbers = Array.from({ length: gridSize * gridSize - 1 }, (_, i) => i + 1);
  // const shuffled = numbers.sort(() => Math.random() - 0.5);
  const shuffled = numbers;

  const board: (number | null)[][] = Array.from({ length: gridSize }, () =>
    Array.from({ length: gridSize }, () => null)
  );

  let index = 0;
  for (const tile of shuffled) {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    board[row][col] = tile;
    index++;
  }

  return board;
};

export const checkWin = (board: Board): boolean => {
  const flatBoard = board.flat();
  for (let i = 0; i < flatBoard.length - 1; i++) {
    if (flatBoard[i] !== null && flatBoard[i] !== i + 1) {
      return false;
    }
  }

  return flatBoard[flatBoard.length - 1] === null;
};