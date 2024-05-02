import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ScheduleTaskItem from './ScheduleTaskItem'

const ScheduleTaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        {tasks.map((task, taskIndex) => (
          <ScheduleTaskItem
              key={`${taskIndex}`}
              task={task}
              toggleTask={() => toggleTask(task)}
              deleteTask={() => deleteTask(task)}
          />
        ))}
      </ScrollView>
    </View>
  
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    marginTop: 10,
  },
});

export default ScheduleTaskList;