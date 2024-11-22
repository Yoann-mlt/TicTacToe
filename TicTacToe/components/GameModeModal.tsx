import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

interface GameModeModalProps {
    visible: boolean;
    onClose: () => void;
    onSelectMode: (size: number) => void;
}

const GameModeModal: React.FC<GameModeModalProps> = ({ visible, onClose, onSelectMode }) => (
    <Modal animationType="slide" transparent visible={visible}>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.header}>Choisissez un mode de jeu</Text>
                <TouchableOpacity style={styles.buttonMode} onPress={() => onSelectMode(3)}>
                    <Text style={styles.buttonText}>Débutant</Text>
                    <Text style={styles.buttonSousText}>(3x3)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMode} onPress={() => onSelectMode(6)}>
                    <Text style={styles.buttonText}>Amateur</Text>
                    <Text style={styles.buttonSousText}>(6x6)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMode} onPress={() => onSelectMode(9)}>
                    <Text style={styles.buttonText}>Pro</Text>
                    <Text style={styles.buttonSousText}>(9x9)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMode} onPress={() => onSelectMode(11)}>
                    <Text style={styles.buttonText}>Expert</Text>
                    <Text style={styles.buttonSousText}>(11x11)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onClose}>
                    <Text style={styles.buttonText}>Fermer</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#000000",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    buttonSousText: {
        color: "#000",
        fontSize: 12,
    },
    buttonMode: {
        backgroundColor: "#3498db",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: 200,
        alignItems: "center",
    },
});

export default GameModeModal;