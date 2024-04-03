import React from 'react';
import {StyleSheet, ScrollView } from 'react-native';
import TaskItem from './TaskItem'

const TaskList = ({ tasks, checkedTasks, toggleTask }) => {
  return (
    <ScrollView style={styles.container}>
      {tasks.map((task, taskIndex) => (
        <TaskItem
            key={`${taskIndex}`}
            task={task}
            isChecked={checkedTasks[task]}
            toggleTask={() => toggleTask(task)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 10,
  },
});

export default TaskList;