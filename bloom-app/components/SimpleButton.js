import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SimpleButton = ({ onPress, label, bgColor, labelColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ padding: 8, backgroundColor: bgColor, borderRadius: 12, borderWidth: 1, borderColor: labelColor, width: 165,
        height: 47, justifyContent: 'center', alignItems: 'center', marginVertical: 6.5}}>
        <Text style={{ color: labelColor, fontSize: 18}}>{label}</Text>
        </TouchableOpacity>
    );
};

export default SimpleButton;