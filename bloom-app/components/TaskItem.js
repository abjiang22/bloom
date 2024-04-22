import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TaskItem = ({ task, isChecked, toggleTask }) => {
    return (
        <View style={[styles.taskItem, isChecked ? styles.checkedTaskItem : {}]}>
            <TouchableOpacity
            style={[styles.checkbox, isChecked ? styles.checkedCheckbox : {}]}
            onPress={toggleTask}
            >
            {isChecked && <View style={styles.innerCircle} />}
            </TouchableOpacity>
            <Text style={[styles.taskText, isChecked ? styles.checkedTaskText : {}]}>{task}</Text>
        </View>
    );
};
  
const styles = StyleSheet.create({
  taskItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#2D6A6E',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#FFFFFF',
  },
  checkedTaskItem: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#2D6A6E',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#EEF8FB',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2D6A6E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    borderColor: '#2D6A6E',
    backgroundColor: '#2D6A6E',
  },
  taskText: {
    color: '#2D6A6E',
    fontSize: 18,
  },
  checkedTaskText: {
    color: '#2D6A6E',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});

export default TaskItem;