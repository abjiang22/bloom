import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Make sure to install these libraries

const RoommatesList = ({ roommates }) => {
    
    const rankColors = ['#2D6A6E', '#A9DDEA', '#EEF8FB', '#FFFFFF'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roommates</Text>
      {roommates.map((roommate, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.itemContent}>
            <View style={[styles.indexCircle, { backgroundColor: rankColors[index % rankColors.length] }]}>
                <Text style={[styles.index, { color: index === 0 ? 'white' : '#2D6A6E' }]}>{index + 1}</Text>
            </View>
            <Text style={styles.name}>{roommate.name}</Text>
            <Text style={styles.percentage}>{roommate.percentage}%</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 10,
    marginTop: 270, // Adjust the top margin to position under the garden
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2D6A6E',
    textAlign: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#A9DDEA',
    borderRadius: 15
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  indexCircle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 15,
  },
  index: {
    fontSize: 20,
    color: '#2D6A6E',

  },
  name: {
    fontSize: 20,
    fontFamily: 'RoundedMplus1c-Medium',
    color: '#2D6A6E',
    flex: 1,
  },
  percentage: {
    fontSize: 16,
    color: '#2D6A6E',
    fontFamily: 'RoundedMplus1c-Regular',
    marginRight: 20,
  }
});

export default RoommatesList;