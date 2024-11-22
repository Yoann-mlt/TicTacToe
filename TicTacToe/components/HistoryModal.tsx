import React from 'react';
import {
    Modal,
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';

const HistoryModal = ({
    visible,
    onClose,
    history,
}: {
    visible: boolean;
    onClose: () => void;
    history: { player: 'X' | 'O'; row: number; col: number }[];
}) => (
    <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Historique des coups</Text>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
                    {history.length === 0 ? (
                        <Text style={styles.noHistoryText}>Aucun coup joué pour cette partie.</Text>
                    ) : (
                        history.map((move, index) => (
                            <Text key={index} style={styles.historyItem}>
                                Joueur {move.player === 'X' ? "1" : "2"} : Colonne {move.col + 1}, Ligne {move.row + 1}
                            </Text>
                        ))
                    )}
                </ScrollView>
                <Button title="Fermer" onPress={onClose} />
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        maxHeight: '70%', // Limite la hauteur pour éviter que la modal dépasse
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollView: {
        width: '100%',
        marginBottom: 10, // Espace pour éviter de chevaucher le bouton
    },
    scrollContent: {
        alignItems: 'flex-start', // Alignement des items à gauche
    },
    noHistoryText: {
        fontSize: 16,
        color: '#888',
        marginVertical: 10,
        textAlign: 'center',
    },
    historyItem: {
        fontSize: 14,
        marginVertical: 4,
    },
});

export default HistoryModal;
