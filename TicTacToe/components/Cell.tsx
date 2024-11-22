import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
interface CellProps {
    value: string;
    onPress: () => void;
    cellSize: number;
}

const Cell: React.FC<CellProps> = ({ value, onPress, cellSize }) => (
    <TouchableOpacity
        style={[styles.cell, { width: cellSize, height: cellSize }]}
        onPress={onPress}
    >
        <Text style={[styles.text, { fontSize: cellSize / 2 }]}>{value}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
});

export default Cell;
