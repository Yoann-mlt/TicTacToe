export const checkWinner = (grid: string[][], winCondition: number): boolean => {
    const size = grid.length;

    for (let i = 0; i < size; i++) {
        if (grid[i].join('').includes('X'.repeat(winCondition)) || grid[i].join('').includes('O'.repeat(winCondition))) {
            return true;
        }

        const column = grid.map(row => row[i]);
        if (column.join('').includes('X'.repeat(winCondition)) || column.join('').includes('O'.repeat(winCondition))) {
            return true;
        }
    }

    const mainDiagonal = grid.map((row, idx) => row[idx]).join('');
    const antiDiagonal = grid.map((row, idx) => row[size - idx - 1]).join('');
    if (
        mainDiagonal.includes('X'.repeat(winCondition)) ||
        mainDiagonal.includes('O'.repeat(winCondition)) ||
        antiDiagonal.includes('X'.repeat(winCondition)) ||
        antiDiagonal.includes('O'.repeat(winCondition))
    ) {
        return true;
    }

    return false;
};
