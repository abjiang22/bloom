import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Make sure to install these libraries

const RoommatesList = ({ roommates, percentages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roommates</Text>
      {roommates.map((roommate, index) => (
        <View key={index} style={styles.item}>
          <View style={styles.itemContent}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.name}>{roommate.name}</Text>
            <Text style={styles.percentage}>{percentages[roommate.name]}%</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginTop: 100, // Adjust the top margin to position under the garden
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    fontSize: 16,
    color: '#2D6A6E',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color: '#2D6A6E',
    flex: 1,
  },
  percentage: {
    fontSize: 16,
    color: '#2D6A6E',
    marginRight: 10,
  }
});

export default RoommatesList;