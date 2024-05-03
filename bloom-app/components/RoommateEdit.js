import {StatusBar} from 'expo-status-bar';
import {View, Image, StyleSheet} from 'react-native';
import React, { useState, useMemo } from 'react';
import RoommatesList from '../components/RoommatesList';
import {styles} from './AppStyles';
import AllTasksImage from '../components/AllTasks';
import { useAppContext } from '../AppContext';


const RoommateEdit = ({ visible, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleAddRoommate = () => {
        // Implement logic to add roommate
        console.log('Add roommate:', phoneNumber);
        onClose(); // Close modal after adding
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalView}>
                <TextInput
                    style={styles.input}
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    placeholder="Enter roommate's phone number"
                    keyboardType="phone-pad"
                />
                <Button title="Add Roommate" onPress={handleAddRoommate} />
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
    }
});

export default RoommateEdit;
