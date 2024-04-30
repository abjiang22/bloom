// CompletionPercentage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CompletionPercentage = ({ percentage, name }) => {

  if (name == 'All') {
    name = 'Group';
  } else if (name == 'My') {
    name = 'Me';
  }
  return ( 
    <View style={styles.completionTextContainer}>
      <Text style={styles.text}>{`${name}`}</Text>
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
  text: {
    textAlign: 'center',
    color: '#2D6A6E',
    fontSize: 18,
    fontFamily: 'RoundedMplus1c-ExtraBold'
  },
  completionText: {
    textAlign: 'center',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-ExtraBold',
  },
});

export default CompletionPercentage;