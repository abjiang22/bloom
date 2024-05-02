import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <View style={[styles.taskItem, task.checked ? styles.checkedTaskItem : {}]}>
            <TouchableOpacity
              style={[styles.checkbox, task.checked ? styles.checkedCheckbox : {}]}
              onPress={() => toggleTask(task)}
            >
            {task.checked && <View style={styles.innerCircle} />}
            </TouchableOpacity>
            <Text style={[styles.taskText, task.checked ? styles.checkedTaskText : {}]}>{task.taskName}</Text>
            {task.checked && (
                <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
                    <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
            )}
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  checkedTaskText: {
    color: '#2D6A6E',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TaskItem;