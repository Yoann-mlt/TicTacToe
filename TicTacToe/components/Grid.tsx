import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Cell from './Cell';

interface GridProps {
    grid: string[][];
    onCellPress: (row: number, col: number) => void;
}

const Grid: React.FC<GridProps> = ({ grid, onCellPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const gridSize = grid.length;
    const cellSize = Math.floor(screenWidth / gridSize) - 2;

    return (
        <View style={styles.container}>
            {grid.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onPress={() => onCellPress(rowIndex, colIndex)}
                            cellSize={cellSize}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
});

export default Grid;
