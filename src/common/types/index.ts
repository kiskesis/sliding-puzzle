export interface PuzzleState {
  grid: number[][];
  emptyPosition: { row: number; col: number };
  moves: number;
}