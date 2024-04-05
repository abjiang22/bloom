// CompletionPercentage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CompletionPercentage = ({ percentage, name }) => {
  return (
    <View style={styles.completionTextContainer}>
      {/* <Text>{`${name}`}</Text> */}
      <Text style={styles.completionText}>{`${percentage.toFixed(0)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  completionTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 16,
    marginTop: 40,
    marginLeft: 20,
  },
  completionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-ExtraBold',
  },
});

export default CompletionPercentage;