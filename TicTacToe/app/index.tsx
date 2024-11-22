import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { checkWinner } from '@/components/CheckWinner';
import Grid from '@/components/Grid';
import { useState } from 'react';
import GameModeModal from '@/components/GameModeModal';
import HistoryModal from '@/components/HistoryModal';

export default function HomeScreen() {
  const [gridSize, setGridSize] = useState<number>(3); // Mode débutant par défaut
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: gridSize }, () => Array(gridSize).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [isHistoryVisible, setIsHistoryVisible] = useState<boolean>(false);
  const [history, setHistory] = useState<{ player: 'X' | 'O'; row: number; col: number }[]>([]);

  const toggleModal = (): void => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleHistory = (): void => {
    setIsHistoryVisible(!isHistoryVisible);
  }

  const getWinCondition = (size: number): number => {
    switch (size) {
      case 3:
        return 3;
      case 6:
        return 4;
      case 9:
        return 5;
      case 11:
        return 6;
      default:
        return 3;
    }
  }

  const handleCellPress = (row: number, col: number): void => {
    if (!grid[row][col] && !winner) {
      const newGrid = [...grid];
      newGrid[row][col] = currentPlayer;
      setGrid(newGrid);

      if (checkWinner(newGrid, getWinCondition(gridSize))) {
        setWinner(currentPlayer);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        setHistory([...history, { player: currentPlayer, row, col }]);
      }
    }
  };

  const handleNewGame = (size: number): void => {
    setIsModalVisible(false);
    setGridSize(size);
    setGrid(Array.from({ length: size }, () => Array(size).fill('')));
    setCurrentPlayer('X');
    setWinner(null);
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tic Tac Toe</Text>
      {winner ? (
        <Text style={styles.winnerText}>Victoire du joueur : {winner === 'X' ? "1" : "2"}</Text>
      ) : (
        <Text style={styles.infoText}>Tour du joueur : {currentPlayer === 'X' ? "1" : "2"}</Text>
      )}
      <Grid grid={grid} onCellPress={handleCellPress} />
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={
        toggleHistory
      }>
        <Text style={styles.buttonText}>Historique</Text>
      </TouchableOpacity>
      <GameModeModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectMode={handleNewGame}
      />
      <HistoryModal
        visible={isHistoryVisible}
        onClose={toggleHistory}
        history={history}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "50%",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
