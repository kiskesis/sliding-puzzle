import React, { useEffect, useMemo, useRef, useState } from "react";
import image from "../../common/images/firstPuzzle.jpg";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box, Button,
  Center,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { checkWin, generateBoard } from "./utils/gameLogic";
import { Board } from "../../common/types";

function GamePage() {
  const [board, setBoard] = useState<Board>([]);
  const [moves, setMoves] = useState<number>(0);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<HTMLButtonElement>(null);

  const gridSize = 9;

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

      if (checkWin(newBoard)) {
        console.log('true')
        onOpen();
      }
    }
  };

  const findEmptyTile = (): [number, number] => {
    const index = board.flat().indexOf(null);
    return [Math.floor(index / gridSize), index % gridSize];
  };

  useEffect(() => {
    setBoard(generateBoard(gridSize));
  }, []);

  const tileSize = useBreakpointValue({ xs: 25, sm: 45, md: 80 }) || 40;
  const gridWidthHeight = gridSize * tileSize;
  const sizes = { base: `${gridWidthHeight}px`, xs: `${gridWidthHeight}px`, sm: `${gridWidthHeight}px`, md: `${gridWidthHeight}px` }

  const responsiveBackgroundSize = useMemo(() => {
    return `${gridSize * tileSize}px ${gridSize * tileSize}px`;
  }, [tileSize]);

  return (
    <Center bg='gray.50' minH='100vh' py={10}>
      <VStack spacing={5} boxShadow='lg' p={6} rounded='md' bg='white'>
        <Box
          width={sizes}
          height={sizes}
          overflow="hidden"
          rounded="none"
        >
          <SimpleGrid columns={gridSize} spacing={0}>
            {board.map((row, rowIndex) => (
              row.map((tile, colIndex) => {
                const backgroundPositionX = tile !== null ? `-${(tile - 1) % gridSize * tileSize}px` : '0';
                const backgroundPositionY = tile !== null ? `-${Math.floor((tile - 1) / gridSize) * tileSize}px` : '0';

                return (
                  <Box
                    key={`${rowIndex}-${colIndex}`}
                    w={`${tileSize}px`}
                    h={`${tileSize}px`}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    bg={tile === null ? 'transparent' : 'gray.200'}
                    backgroundImage={tile !== null ? `url(${image})` : 'none'}
                    backgroundSize={tile !== null ? responsiveBackgroundSize : '0 0'}
                    backgroundPosition={`${backgroundPositionX} ${backgroundPositionY}`}
                    border='1px'
                    borderColor='gray.400'
                    cursor="pointer"
                    onClick={() => handleTileClick(rowIndex, colIndex)}
                    userSelect='none'
                  />
                );
              })
            ))}
          </SimpleGrid>
        </Box>
        <Box>Moves: {moves}</Box>
      </VStack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Congratulations!
            </AlertDialogHeader>

            <AlertDialogBody>
              You've successfully completed the puzzle in {moves} moves!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Center>
  )
}

export default GamePage;
