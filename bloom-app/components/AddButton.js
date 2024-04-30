import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function AddButton({ onPress }) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.addButton}>
        <MaterialIcons name="add" size={30} color="white" />
      </TouchableOpacity>

    );
  }
  
  const styles = StyleSheet.create({
    addButton: {
      position: 'absolute',
      bottom: 30,
      right: 30,
      backgroundColor: '#2D6A6E',
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 3,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
  });
  
  export default AddButton;