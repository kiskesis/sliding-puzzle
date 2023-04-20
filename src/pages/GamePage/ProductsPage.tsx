import React, { useEffect, useState } from "react";
import "./ProductsPage.css";

function ProductsPage() {
  const [board, setBoard] = useState<(number | null)[][]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const gridSize = 3;

  const generateBoard = (): (number | null)[][] => {
    const numbers = Array.from({ length: gridSize * gridSize - 1 }, (_, i) => i + 1).reverse();
    // const shuffled = numbers.sort(() => Math.random() - 0.5);
    const shuffled = numbers;

    const board: (number | null)[][] = [];
    for (let i = 0; i < gridSize; i++) {
      board[i] = [];
      for (let j = 0; j < gridSize; j++) {
        const tile = shuffled.pop();
        board[i][j] = tile !== undefined ? tile : null;
      }
    }
    return board;
  };

  const handleTileClick = (row: number, col: number): void => {
    const [emptyRow, emptyCol] = findEmptyTile();
    if (
      (Math.abs(emptyRow - row) === 1 && emptyCol === col) ||
      (Math.abs(emptyCol - col) === 1 && emptyRow === row)
    ) {
      const newBoard = [...board];
      newBoard[emptyRow][emptyCol] = board[row][col];
      newBoard[row][col] = null;
      setBoard(newBoard);
      setMoves(moves + 1);

      if (checkWin()) {
        setWin(true);
        alert('Hurray!')
      }
    }
  };

  const findEmptyTile = (): [number, number] => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (board[row][col] === null) {
          return [row, col];
        }
      }
    }

    return [-1, -1]
  };

  const checkWin = (): boolean => {
    let counter = 1;
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (board[row][col] !== null && board[row][col] !== counter) {
          return false;
        }
        counter++;
      }
    }
    return true;
  };

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  return (
    <div className="game-container">
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((tile, colIndex) => (
              <div
                key={colIndex}
                className={`tile ${tile === null ? 'empty' : ''}`}
                onClick={() => handleTileClick(rowIndex, colIndex)}
              >
                {tile}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="moves">Moves: {moves}</div>
    </div>
  );
  // return (
  //   <main className="main">
  //     <Text fontSize="3xl" mb={2}>Sliding Puzzle Game</Text>
  //
  //     <SimpleGrid
  //       bg='gray.50'
  //       columns={{ sm: 2, md: 4 }}
  //       spacing='8'
  //       p='10'
  //       textAlign='center'
  //       rounded='lg'
  //       color='gray.400'
  //     >
  //       <Box boxShadow='xs' p='6' rounded='md' bg='white'>
  //         xs
  //       </Box>
  //     </SimpleGrid>
  //   </main>
  // );
}

export default ProductsPage;
